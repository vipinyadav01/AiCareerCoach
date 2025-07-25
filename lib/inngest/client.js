import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "launchtrack", name: "LaunchTrack",
    credentials: {
        apiKey: process.env.GEMINI_API_KEY,
    },
 });
