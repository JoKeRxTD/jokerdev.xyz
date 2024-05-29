import prisma from "@/src/lib/db";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { auth } from "@/src/lib/auth";
import DeletePostButton from "@/src/components/DeletePostButton";

export default async function Page({ params }: { params: { id: string } }) {
  // get the post from the database
  const post = await prisma.post.findUnique({
    where: {
      id: String(params.id),
    },
  });
  const user = await auth();
  
  if (!post) {
    return <div className="text-center">Post not found</div>;
  }

  const createdAt = new Date(post.createdAt).toLocaleDateString();
  
  const userId = user?.profile.id;
  console.log(userId);
  console.log(post.discordId)
  const isOwner = userId === post.discordId;
  
  return (
    <main className="text-center items-center justify-center w-[500px]">
      <Card className="max-w-sm w-full sm:w-1/2 lg:w-full justify-around items-center flex flex-col rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
        <CardHeader>
          <CardTitle className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-2">
          <span className="text-center justify-center items-center text-lg text-gray-800 dark:text-gray-200">
            {post.body}
          </span>
        </CardContent>
        <CardFooter className="flex flex-col justify-center gap-2">
          <span className="text-center justify-center items-center text-gray-800 dark:text-gray-200">
            Created By {post.username || "Anonymous"}
          </span>
          <span>{createdAt}</span>
          <div className="flex flex-row justify-center items-center gap-2">
            {/* delete button */}
            {isOwner && <DeletePostButton id={post.id} className="w-20 flex items-center justify-center rounded-md p-4 h-5 w-22 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400" />}
            {/* go back one button that works within a /guestbook/[id] */}
            <Link href="/guestbook">
              <Button variant="Discord" className="p-4 h-5 w-20 inline-flex items-center justify-center content-center rounded-md">
                Go Back
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
