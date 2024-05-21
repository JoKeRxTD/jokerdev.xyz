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
import { cn } from '../utils/cn';
import { classNames } from '../utils/classNames';
import { Badge } from "../components/ui/badge"




const stats = "https://api.github-star-counter.workers.dev/user/jokerxtd" // {"stars":12,"forks":4}
const repos = "https://api.github.com/users/jokerxtd/repos?type=owner&per_page=100"

// Languages object to display the language of the repository (Name = Language, borderColor = Hex Color)
const Languages: Languages = {
  TypeScript: "TypeScript",
  Python: "Python",
  Lua: "LUA",
  JavaScript: "JavaScript",
  HTML: "HTML",
  CSS: "CSS",
  Md: "MD",
  Vue: "VUE",
  Ejs: "EJS",
  Readme: "Readme",
  Rd: "RD",
  Svelte: "Svelte",
  MDX: "MDX",
  PHP: "PHP",
  SCSS: "SCSS",
  Handlebars: "Handlebars",
  Markdown: "Markdown",
  Rust: "Rust",
  Null: "N/A",
}

type Languages = {
  [key: string]: string;
};

const queryClient = new QueryClient()

export default function Github() {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubAPI />
    </QueryClientProvider>
  )
}

//? Languages Ring Colors
const TypeScript = "bg-blue-500/25 text-blue-500 ring-blue-500/25";
const Python = "bg-blue-500/25 text-blue-500 ring-blue-500/25";
const Lua = "bg-blue-500/25 text-blue-500 ring-blue-500/25";
const JavaScript = "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25";
const HTML = "bg-red-500/25 text-red-500 ring-red-500/25";
const CSS = "bg-indigo-500/25 text-indigo-500 ring-indigo-500/25";
const Md = "bg-black/25 text-black ring-black/25";
const Vue = "bg-gray-500/25 text-gray-500 ring-gray-500/25";
const Ejs = "bg-pink-500/25 text-pink-500 ring-pink-500/25";
const Readme = "bg-black/25 text-black ring-black/25";
const Rd = "bg-black/25 text-black ring-black/25";
const Svelte = "bg-red-500/25 text-red-500 ring-red-500/25";
const MDX = "bg-black/25 text-black ring-black/25";
const PHP = "bg-blue-500/25 text-blue-500 ring-blue-500/25";
const SCSS = "bg-purple-500/25 text-purple-500 ring-purple-500/25";
const Handlebars = "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25";
const Markdown = "bg-black/25 text-black ring-black/25";
const Rust = "bg-black/25 text-black ring-black/25";
const Null = "bg-black/25 text-black ring-black/25";

//? Github API Component
function GithubAPI() {
  const { isPending: isPendingRepos, error: errorRepos, data: reposData, isFetching: isFetchingRepos } = useQuery({
    queryKey: ['reposData'],
    //  get all public repo data from my github
    queryFn: async () => {
      const { data } = await axios.get(repos)
      // show all repositories except the forked ones
      const filteredRepos = data.filter((repo: any) => !repo.fork)

      const sortedRepositories = filteredRepos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)

      // do not display more than 9 repositories
      const limitedRepositories = sortedRepositories.slice(0, 12)

      return limitedRepositories
    }
  })



  // total stars and forks from "stats" api
  const { isPending: isPendingStats, error: errorStats, data: statsData, isFetching: isFetchingStats } = useQuery({
    queryKey: ['statsData'],
    queryFn: async () => {
      const { data } = await axios.get(stats)
      return data
    },
  })

  const ArchiedBadge = ({ archived }: { archived: boolean, classNames: string }) => {
    if (archived) {
      return (
        <Code className="text-xs font-bold bg-orange-500/25 text-orange-500 ring-orange-500/25 ring-1 ring-inset text-[12px]">
          Archived
        </Code>
      )
    }
    return null
  }

  const LanguagesRing = ({ language }: { language: string }) => {
    return (
      // if language = null raplace with N/A
      <Code color="default" className={classNames(
        language == "TypeScript" && TypeScript,
        language == "Python" && Python,
        language == "Lua" && Lua,
        language == "JavaScript" && JavaScript,
        language == "HTML" && HTML,
        language == "CSS" && CSS,
        language == "Md" && Md,
        language == "Vue" && Vue,
        language == "Ejs" && Ejs,
        language == "Readme" && Readme,
        language == "Rd" && Rd,
        language == "Svelte" && Svelte,
        language == "MDX" && MDX,
        language == "PHP" && PHP,
        language == "SCSS" && SCSS,
        language == "Handlebars" && Handlebars,
        language == "Markdown" && Markdown,
        language == "Rust" && Rust,
        language == Null && Null,
        "ring-1 ring-inset text-[12px] font-semibold"
      )}>
        {Languages[language] || Languages["Null"]}
      </Code>
    )
  }

  const Title = ({ title }: { title: string }) => {
    if (title.length > 25) {
      return (
        <h1 className="font-semibold text-blue-500">{title.slice(0, 8) + "..."}</h1>
      )
    }
    return (
      <h1 className="font-semibold text-blue-500">{title}</h1>
    )
  }

  if (errorRepos) return 'An error has occurred: ' + errorRepos.message

  return (

    <div className='flex flex-wrap w-full gap-4 p-4 justify-center'>
      <motion.div
        className="w-3 h-3 rounded-full mr-1"
      />
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <div className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Github Repositories</div>
        <div className="text-center p-4 text-base lg:text-lg">
          Here are some of my public github repositories<br />You can use these to build your own applications from just like this <a className="font-bold decoration-wavy decoration-2 underline decoration-sky-800" href="/">website</a>.
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Code color="default" className="flex flex-row items-center font-extrabold text-lg text-center justify-center p-1 gap-2 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            Total<Stars className='text-yellow-500 ' />:{statsData?.stars}
          </Code>
          <Code color="default" className="flex flex-row items-center font-extrabold text-lg text-center justify-center p-1 gap-2 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            Total<Fork className='text-zinc-800 text-xl dark:text-white' />:{statsData?.forks}
          </Code>
        </div>
        <div className="text-center p-4 text-base lg:text-lg">
          Check out my <a href="https://github.com/JoKeRxTD" className="underline decoration-wavy decoration-2 decoration-green-800 font-bold">Github</a> for more projects.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-2 justify-center ">
        {isPendingRepos && <div>Loading...</div>}
        {reposData?.map((repo: any) => (
          <Card key={repo.id} className="w-full h-full border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            <CardHeader>
              <div className="flex flex-row items-center justify-center text-center gap-2">
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="font-bold text-primary-300 hover:text-primary-400"><Title title={repo.name} /></a>
                <LanguagesRing language={repo.language} />
                <ArchiedBadge archived={repo.archived} classNames="text-xs font-bold" />
              </div>
            </CardHeader>
            <CardBody>
                <p className="text-base left-[2rem] font-semibold text-zinc-800 dark:text-zinc-100">{repo.description}</p>
            </CardBody>
            <CardFooter>
              <div className="flex flex-row items-center text-center justify-center gap-1 text-[10px]">
                <Code color="default" onClick={() => window.open(repo.html_url, "_blank")} className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 cursor-pointer">
                  <GithubIcon className='text-zinc-800 dark:text-zinc-100' height={12} />
                </Code>
                <Code color="default" className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                  {repo.stargazers_count}<Stars className='text-yellow-500' height={12} />
                </Code>
                <Code color="default" className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                  {repo.forks}<Fork className='text-zinc-800 text-md dark:text-white' height={12} />
                </Code>
                <Code color="default" className="flex flex-row items-center text-center justify-center gap-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                  {repo.open_issues}<OpenIssues className='text-orange-600' height={12} />
                </Code>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
