'use client'
import { useUser } from "@clerk/nextjs";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { UserProfile } from "@clerk/nextjs";
import NotSignedIn from "@/src/components/NotSignedIn";
// import JoinedOrganizationList from "@/src/components/JoinedOrganizationList";
import { Tabs, Tab } from "@nextui-org/tabs";
import { OrganizationList, OrganizationProfile } from "@clerk/nextjs";


export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [show, setShow] = useState(false);


  if (!isLoaded || !isSignedIn) {
    return <NotSignedIn />;
  }

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

const CustomPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <h1>Custom Profile Page</h1>
      <p>This is the custom profile page</p>
    </div>
    
  );
};

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <h1 className="text-center p-4">
          <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Dashboard</p>
        </h1>
        <p className="text-lg pb-8">Welcome, {user.fullName}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Code color="primary" size="sm" className='mb-4 sm:flex-shrink '>Here you can view your profile and the organizations you have joined.</Code>
          <Tabs aria-label="Options" color="primary" className="max-w-[80vw] w-full h-full items-center text-center justify-center flex flex-wrap">
            <Tab key="personal" title="Personal">
            <Card className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-gray-300  backdrop-blur-2xl dark:border-neutral-800  lg:rounded-xl lg:border bg-transparent">
                <CardBody>
                  <UserProfile path="/user-profile" routing="path">
                    <UserProfile.Page
                      label="Custom Page"
                      url="custom"
                      labelIcon={<DotIcon />}
                    >
                      <CustomPage />
                    </UserProfile.Page>
                    <UserProfile.Link
                      label="Homepage"
                      url="/"
                      labelIcon={<DotIcon />}
                    />
                    <UserProfile.Page label="account" />
                    <UserProfile.Page label="security" />
                  </UserProfile>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="organizations" title="Organizations">
              <Card className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-gray-300  backdrop-blur-2xl dark:border-neutral-800  lg:rounded-xl lg:border bg-transparent">
                <CardBody>
                  {/* <OrganizationList /> */}
                  <OrganizationProfile />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        <Button
          color="default"
          className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
          onClick={() => setShow(!show)}>
          <SignOutButton />
        </Button>
      </div>
    </div>
  );
}