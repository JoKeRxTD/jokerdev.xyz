/* eslint-disable @next/next/no-img-element */
import prisma from "@/src/lib/db";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { auth } from "@/src/lib/auth";
import DeleteUserButton from "@/src/components/DeleteUserButton";
import EditUser from "@/src/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Image } from "@nextui-org/image";
import { processFlags } from '@/src/utils/flags';
import { Tooltip } from "@nextui-org/react";


export default async function MeProfilePage({ params }: { params: { id: string } }) {
  // get the post from the database
  const user = await auth();
  const discordId = user?.profile.id;
  console.log(discordId);
  const userData = await prisma.user.findUnique({
    where: {
      discordId: discordId
    },
  });

  const id = userData?.id;
  const global_name = userData?.global_name;
  const name = userData?.name;
  const username = userData?.username;
  const avatar = userData?.avatar;
  const image = userData?.image;
  const role = userData?.role;
  const email = userData?.email;
  const email_verified = userData?.email_verified;
  const flags = userData?.flags;
  const premium_type = userData?.premium_type;
  const public_flags = userData?.public_flags;
  const banner = userData?.banner;
  const createdAt = userData?.createdAt.toLocaleDateString();
  const updatedAt = userData?.updatedAt.toLocaleDateString();

  const userId = userData?.discordId;
  const userIdCheck = userId === discordId;
  console.log(userId);

  if (!user) {
    return <div className="text-center">User not found</div>;
  }
  const nitroType = {
    0: "None",
    1: "Nitro Classic",
    2: "Nitro",
  };
  const nitro = nitroType[premium_type!];
  const userFlags: string[] = processFlags(flags!, nitro);

  const flagCodeToName = {
    "07742a794bed8ec43505775550b2635e43828c57": "Partner",
    "48f181723d3a3b452eeb7f7044d832e38d6ff411": "Nitro",
    "d9e17819b1eacac4f4e56f94eaf483a26abb8e18": "Early Verified Bot Developer",
    "151b4354319f7ab29b124b53b0e0cee44b7007a5": "Early Supporter",
    "6901298edcaee0fc8f81c108702ff5fb01955abe": "Hypesquad Brilliance",
    "abacb4abed31ed7a37f4578aadee07143cf0303f": "Hypesquad Balance",
    "771107b5dec32c6d1cc20c0e8d5682e3c58df87f": "Hypesquad Bravery",
    "dc22ceb9ea3234470468812bee08cff85e993127": "Hypesquad Events",
    "ecec6059f20760c80c98d68b8a5895aa4f8e5120": "Staff",
    "a190fcd2dcd3de6747d97711f56b578764492cd6": "Certified Moderator",
    "666ed6955708d9d54083a067ce3d6d85fd7234fc": "Bug Hunter Level One",
    "18ca50e1d7abebd32825eb9957ce04354caf0fce": "Bug Hunter",
  };
  const flagNames = userFlags.map((flag) => flagCodeToName[flag]);
  const isOwner = userId === discordId;
  
  return (
    <div className="text-center items-center justify-center content-center">
      <Card className="flex flex-col text-center items-center justify-center content-center w-[520px] h-[75vh] rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
        <CardHeader>
              <Image
                src={banner}
                alt={username}
                className="object-fill w-[100%] h-[100%] rounded-md p-0.5 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400"
              />
          <CardTitle className="text-2xl font-bold">
            {global_name}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">{username}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 text-center items-center justify-center content-center">
          <Avatar className="w-12 h-12">
            {image && (
              <AvatarImage
                src={image}
                alt={username}
              />
            )}
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          <div className="flex flex-row gap-2">
            {userFlags.map((flag) => (
              <Tooltip key={flag} content={flagCodeToName[flag]} placement="top">
                <Image
                  key={flag}
                  src={`/badges_2/${flag}.svg`}
                  alt={flag}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </Tooltip>
            ))}
          </div>
          <div className="flex flex-col text-center items-center justify-center">
            <span>Role: {role}</span>
            <span>Email: {email}</span>
            <span>Email Verified: {email_verified}</span>
            <span>Flags: {flags}</span>
            <span>Premium Type: {premium_type}</span>
            <span>Public Flags: {public_flags}</span>
            <span>Created At: {createdAt}</span>
            <span>Updated At: {updatedAt}</span>
            <span>DiscordId: {discordId}</span>
            {/* <span>userId: {userId}</span> */}
            {/* <span>userIdCheck: {userIdCheck}</span> */}
            <span>CUID: {id}</span>
            <span>global_name: {global_name}</span>
            <span>Display Name: {name}</span>
            <span>Username: {username}</span>
            <span>avatar: {avatar}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-center gap-2">
          {/* <EditUser id={id} /> */}
          {/* back button */}
          <Link href="/me">
            <Button
              variant="JokerBlueButton"
              className="p-4 h-5 w-20"
            >
              Back
            </Button>
          </Link>
          {isOwner && <DeleteUserButton id={discordId as string} className="w-20 flex items-center justify-center rounded-md p-4 h-5 w-22 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400" />}
        </CardFooter>
      </Card>
    </div>
  );
}