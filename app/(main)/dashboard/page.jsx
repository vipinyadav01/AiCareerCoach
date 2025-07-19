import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightPage = async () => {
   const { isOnboarded } = await getUserOnboardingStatus();
    if (!isOnboarded) {
      // If user is not onboarded, redirect to the onboarding page
      redirect("/onboarding");
    }
  return (
    <div>Industry Insight Page</div>
  )
}

export default IndustryInsightPage