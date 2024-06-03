/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { auth } from "@/src/lib/auth";
import DeleteUserButton from "@/src/components/DeleteUserButton";
// import EditUser from "@/src/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Image } from "@nextui-org/image";
import { processFlags } from '@/src/utils/flags';
import { Tooltip } from "@nextui-org/react";

// TODO: Add user type 
export default async function MeProfilePage({ params }: { params: { id: string } }) {
  // get the post from the database
  const session = await auth();
  
  if (!session) {
    return notFound();
  }
  
  const user = session.user;

  if (!user) {
    return notFound();
  }

  // delete user session data if delete button pressed
  const handleDelete = async () => {
    await fetch("/api/user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: user.id }),
    });
    // signOut();
  };

  return (
    <div className="text-center items-center justify-center content-center">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>{user.username}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`} alt={user.username} width={100} height={100} />
          <div className="flex flex-row items-center justify-center">
            <Tooltip content="Edit Profile">
              {/* <Link href={`/user/${user.id}/edit`}>
                <Button>Edit</Button>
              </Link> */}
            </Tooltip>
            {/* <DeleteUserButton id={user.discordId} /> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}