import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Button, Code } from "@nextui-org/react";
import { GithubIcon, Stars, Fork, OpenIssues } from "@/src/components/Icons";
import { motion } from "framer-motion";



const stats = "https://api.github-star-counter.workers.dev/user/jokerxtd" // {"stars":12,"forks":4}
const repos = "https://api.github.com/users/jokerxtd/repos?type=owner&per_page=100"

const Languages = {
  JavaScript: "#F1E05A",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Lua: "#000080",
  Typescript: "#3178C6",
  md: "#fafafa",
  Vue: "#41B883",
  Ejs: "#A91E50",
  Python: "#3572A5",
  readme: "#fafafa",
  rd: "#fafafa"
};

interface RepoProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: "TypeScript" | "Python" | "Lua" | "Javascript" | "readme" | "rd";
}

const queryClient = new QueryClient()

export default function Github() {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubAPI />
    </QueryClientProvider>
  )
}

function GithubAPI() {

  const { isPending: isPendingRepos, error: errorRepos, data: reposData, isFetching: isFetchingRepos } = useQuery({
    queryKey: ['reposData'],
    //  get all public repo data from my github
    queryFn: async () => {
      const { data } = await axios.get(repos)
      // Filter repos if private do not display if last edit is more than 1 year ago do not display
      const filteredRepos = data.filter((repo: any) => !repo.fork == false && new Date(repo.updated_at) > new Date(new Date().setFullYear(new Date().getFullYear() - 1)) || repo.stargazers_count >= 1)
      // if last ed
      //display in star rating order 
      const sortedRepositories = filteredRepos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      // do not display more than 9 repositories
      const limitedRepositories = sortedRepositories.slice(0, 9)

      return limitedRepositories
    },
  })

  if (errorRepos) return 'An error has occurred: ' + errorRepos.message

  return (

    <div className='flex flex-wrap w-full gap-4 p-4 justify-center'>
      {/* <motion.div
        className="w-3 h-3 rounded-full mr-1"
        style={{ background: `${Languages}`, border: `solid 3px ${Languages}` }}
      /> */}
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <div className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Github Repositories</div>
        <div className="text-center p-4">
          Here are some of my public github repositories<br />You can use these to build your own applications from just like this <a className="font-bold decoration-wavy decoration-2 underline decoration-sky-800" href="/">website</a>.
        </div>
        <div className="text-center p-4">
          Check out my <a href="https://github.com/JoKeRxTD" className="underline decoration-wavy decoration-2 decoration-green-800 font-bold">Github</a> for more projects.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-2 p-2 justify-center ">
        {reposData?.map((repo: any) => (
          <Card key={repo.id} className='max-w-sm w-full sm:w-1/2 lg:w-full justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
            <CardHeader className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
              <h2 className="items-center text-center">{repo.name}</h2>
            </CardHeader>
            <CardBody className="flex flex-wrap items-center text-center space-y-2 p-1 justify-between">
              <p className='text-small'>{repo.description}</p>
              {repo.language && (
                <div>
                  Tags:{" "}
                  <Code key={repo.language} color="primary" className="mx-1">
                    {repo.language.toString()}
                  </Code>
                </div>
              )}
            </CardBody>
            <CardFooter className="grid flex-row items-center text-center justify-center gap-2">
              <div className="flex flex-row items-center text-center justify-center gap-2 text-base">
                <Code color="default" onClick={() => window.open(repo.html_url, "_blank")} className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 cursor-pointer">
                  <GithubIcon className='text-gray-800 dark:text-gray-100' />
                </Code>
                <Code color="default" className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                  {repo.stargazers_count}<Stars className='text-yellow-500' />
                </Code>
                <Code color="default" className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                  {repo.forks}<Fork className='text-zinc-800 text-xl dark:text-white' />
                </Code>
                <Code color="default" className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                  {repo.open_issues}<OpenIssues className='text-orange-600' />
                </Code>
              </div>
              <Code color='default' className="text-center font-extrabold items-center justify-center text-blue-500 p-1 border border-zinc-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-zinc-200 lg:dark:bg-zinc-800/30">
                Last Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </Code>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

