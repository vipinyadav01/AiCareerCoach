import { db } from "@/lib/prisma";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // Run every Sunday at midnight
  async ({ event, step }) => {
    const industries = await step.run("Fetch industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
      const prompt = `
    You are an expert labor market analyst. Analyze the latest data and trends for the "${industry}" industry in the United States as of ${new Date().getFullYear()}.
    Provide your response in STRICTLY the following JSON format, with realistic, data-driven values (no placeholders or guesses):

    {
        "salaryRanges": [
            { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
        ],
        "growthRate": number, // Percentage, e.g., 5.2
        "demandLevel": "High" | "Medium" | "Low",
        "topSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
        "marketOutlook": "Positive" | "Neutral" | "Negative",
        "keyTrends": ["trend1", "trend2", "trend3", "trend4", "trend5"],
        "recommendedSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"]
    }

    - Use only real, recent, and relevant information.
    - Salary ranges must include at least 5 common roles, with realistic US salary data for each.
    - Growth rate should be a recent annual percentage for the industry.
    - Demand level should reflect current hiring trends.
    - Include at least 5 top skills and 5 key trends.
    - Do NOT include any explanations, markdown, or extra text—ONLY the JSON object.
`;

      const res = await step.ai.wrap(
        "gemini",
        async (p) => {
          return await model.generateContent(p);
        },
        prompt
      );

      const text = res.response.candidates[0].content.parts[0].text || "";
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

      const insights = JSON.parse(cleanedText);

      await step.run(`Update ${industry} insights`, async () => {
        await db.industryInsight.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      });
    }
  }
);