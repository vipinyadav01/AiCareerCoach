import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/dashboard-view";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  try {
    const { isOnboarded } = await getUserOnboardingStatus();

    // If not onboarded, redirect to onboarding page
    if (!isOnboarded) {
      redirect("/onboarding");
    }

    const insights = await getIndustryInsights();

    // Handle redirect response from getIndustryInsights
    if (insights.redirect) {
      redirect(insights.redirect);
    }

    return (
      <div className="container mx-auto">
        <DashboardView insights={insights.data || insights} />
      </div>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    
    // If database connection fails or user data is unavailable, redirect to onboarding
    redirect("/onboarding");
  }
}