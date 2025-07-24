
import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import { redirect } from 'next/navigation';
import React from 'react';
import OnboardingForm from './_components/onboarding-form';
import { checkUser } from '@/lib/checkUser';



const onboardingPage = async () => {
  // Ensure user exists in DB
  await checkUser();

  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    // If user is already onboarded, redirect to the dashboard
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}

export default onboardingPage