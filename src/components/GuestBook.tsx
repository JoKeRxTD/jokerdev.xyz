
import { getAllPosts } from "@/src/actions/guestPost";
import Link from "next/link";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Post } from "@/src/types/posts";


export default async function PostsList() {
  // post types
  const posts = await getAllPosts() as Post[];
  

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/guestbook/${post.id}`}>
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
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              <div className="flex flex-row justify-center items-center gap-2">
                <Link href={`/guestbook/${post.id}`}>
                  <Button variant="blue" size="default" rounded="md">
                    View Post
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}