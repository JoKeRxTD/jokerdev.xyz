
import { getallPosts } from "@/src/actions/actions";
import Link from "next/link";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";


export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await getallPosts()

  if (!posts) {
    return <div>No posts found</div>;
  }

  // if post.body is more than 150 char then truncate it
  posts.forEach((post) => {
    if (post.body.length > 150) {
      post.body = post.body.slice(0, 150) + "...";
    }
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-4 justify-center">
      {posts.map((post) => (
        <Card key={post.id} className="max-w-sm w-full sm:w-1/2 lg:w-full justify-around items-center flex flex-col rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
          <CardHeader>
            <CardTitle className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-2">
            <span className="text-center justify-center items-center text-lg text-gray-800 dark:text-gray-200">
              {post.body}
            </span>
            <Link href={`/guestbook/${post.id}`}>
              <Button
                size="md"
                variant="default"
                className="w-[10vh] h-8 inline-flex items-center justify-center rounded-md text-sm ring-1 ring-inset bg-green-900/25 text-green-800 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25 hover:bg-green-900/50 hover:text-green-400 hover:ring-green-400/50 dark:hover:bg-green-900/50 dark:hover:text-green-400 dark:hover:ring-green-400/50 transition-colors duration-90 ease-in-out"
              >
                Read more
              </Button>
              
            </Link>
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <span className="text-center justify-center items-center text-gray-800 dark:text-gray-200">
              {/* Created By {post.username} */}
            </span>
            {new Date(post.createdAt).toLocaleDateString()}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
