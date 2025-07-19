import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import OnboardingForm from './_components/onboarding-form';


const onboardingPage = async () => {

  //check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    // If user is already onboarded, redirect to the home page  
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  ) 
}

export default onboardingPage