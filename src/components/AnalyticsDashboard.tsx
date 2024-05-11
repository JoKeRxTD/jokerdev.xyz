'use client'
import { analytics } from '@/src/utils/analytics'
import { BarChart, Card, AreaChart, BarList } from '@tremor/react'
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'
import { Divider } from "@nextui-org/react";

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string
  amtVisitorsToday: number
  timeseriesPageviews: Awaited<ReturnType<typeof analytics.retrieveDays>>
  topCountries: [string, number][]
}

const Badge = ({ percentage }: { percentage: number }) => {
  const isPositive = percentage > 0
  const isNeutral = percentage === 0
  const isNegative = percentage < 0

  if (isNaN(percentage)) return null

  const positiveClassname = 'bg-green-900/25 text-green-400 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25'
  const neutralClassname = 'bg-orange-900/25 text-orange-400 ring-orange-400/25 dark:bg-orange-900/25 dark:text-orange-400 dark:ring-orange-400/25'
  const negativeClassname = 'bg-red-900/25 text-red-400 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25'

  return (
    <span
      className={`inline-flex gap-1 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
        isPositive
          ? positiveClassname
          : isNeutral
          ? neutralClassname
          : negativeClassname
      }`}>
      {isPositive ? <ArrowUpRight className='h-3 w-3' /> : null}
      {isNeutral ? <ArrowRight className='h-3 w-3' /> : null}
      {isNegative ? <ArrowDownRight className='h-3 w-3' /> : null}
      {percentage.toFixed(0)}%
    </span>
  )
}

const AnalyticsDashboard = ({
  avgVisitorsPerDay,
  amtVisitorsToday,
  timeseriesPageviews,
  topCountries,
}: AnalyticsDashboardProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6'>
        <Card className='w-full text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
          <p className='text-base text-[#222222] dark:text-[#b4b3b3] font-semibold'>
            Avg. visitors/day
          </p>
          <p className='text-3xl text-[#222222] dark:text-[#fafafa] font-semibold'>
            {avgVisitorsPerDay}
          </p>
        </Card>
        <Card className='w-full text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
          <p className='flex gap-2.5 items-center text-base text-[#222222] dark:text-[#b4b3b3] font-semibold'>
            Visitors today
            <Badge
              percentage={
                (amtVisitorsToday / Number(avgVisitorsPerDay) - 1) * 100
              }
            />
          </p>
          <p className='text-3xl  text-[#222222] dark:text-[#fafafa] font-semibold'>
            {amtVisitorsToday}
          </p>
        </Card>
      </div>
      <Divider/>
      <Card className='flex flex-col sm:grid grid-cols-4 gap-6 text-center justify-center items-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
        <h2 className='w-full text-[#222222] dark:text-[#b4b3b3] text-center sm:left-left font-semibold text-lg'>
          This weeks top visitors:
        </h2>
        <div className='col-span-3 flex items-center justify-between flex-wrap gap-8 '>
          {topCountries?.map(([countryCode, number]) => {
            return (
              <div key={countryCode} className='flex items-center gap-3 text-[#222222] dark:text-[#fafafa]'>
                <p className='sm:block text-[#222222] dark:text-[#fafafa]'>
                  {countryCode}
                </p>
                <ReactCountryFlag
                  className='text-5xl sm:text-3xl'
                  svg
                  countryCode={countryCode}
                />
                <p className='text-[#222222] dark:text-[#fafafa]'>
                  {number}
                </p>
              </div>
            )
          })}
        </div>
      </Card>
      <Divider/>
      <Card className='w-full border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
        {timeseriesPageviews ? (
          <BarChart
            allowDecimals={false}
            colors={['zinc-800']}
            showAnimation
            data={timeseriesPageviews.map((day) => ({
              name: day.date,
              Visitors: day.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!
              }, 0),
            }))}
            categories={['Visitors']}
            index='name'
          />
          
        ) : null}
      </Card>
      <Divider/>
    </div>
  )
}

export default AnalyticsDashboard


