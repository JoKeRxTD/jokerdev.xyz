import AnalyticsDashboard from '@/src/components/AnalyticsDashboard'
import { getDate } from '@/src/utils'
import { analytics } from '@/src/utils/analytics'
import { currentUser } from '@clerk/nextjs/server';
import { UserButton } from "@clerk/nextjs";
import { Protect } from "@clerk/nextjs";
import AccessDenied from '@/src/components/AccessDenied'
import NotSignedIn from "@/src/components/NotSignedIn";

export default async function Page() {
  const user = await currentUser();
  
  if (!user) return <NotSignedIn/>;

  const TRACKING_DAYS = 7
  const pageviews = await analytics.retrieveDays('pageview', TRACKING_DAYS)

  const totalPageviews = pageviews.reduce((acc, curr) => {
    return (
      acc +
      curr.events.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!
      }, 0)
    )
  }, 0)

  const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1)

  const amtVisitorsToday = pageviews
    .filter((ev) => ev.date === getDate())
    .reduce((acc, curr) => {
      return (
        acc +
        curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0)
      )
    }, 0)

  const topCountriesMap = new Map<string, number>()

  for (let i = 0; i < pageviews.length; i++) {
    const day = pageviews[i]
    if (!day) continue

    for (let j = 0; j < day.events.length; j++) {
      const event = day.events[j]
      if (!event) continue

      const key = Object.keys(event)[0]!
      const value = Object.values(event)[0]!

      const parsedKey = JSON.parse(key)
      const country = parsedKey?.country

      if (country) {
        if (topCountriesMap.has(country)) {
          const prevValue = topCountriesMap.get(country)!
          topCountriesMap.set(country, prevValue + value)
        } else {
          topCountriesMap.set(country, value)
        }
      }
    }
  }

const topCountries = Array.from(topCountriesMap.entries()).sort((a ,b) => {
    if(a[1] > b[1]) return -1
    else return 1
}).slice(0, 5)

  return (
  <Protect
      role="org:admin"
      fallback={
        <AccessDenied />
      }
    >
      <div className="w-full p-4 flex flex-col gap-4">
          <h1 className="text-center p-4">
            <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Analytics</p>
          </h1>
          <p className="text-center p-4">
            Here you can find our Analytics.
          </p>
          <p className="flex flex-wrap justify-center items-center gap-1 p-1">
            Hello {user?.firstName}!
          </p>
        <AnalyticsDashboard
          avgVisitorsPerDay={avgVisitorsPerDay}
          amtVisitorsToday={amtVisitorsToday}
          timeseriesPageviews={pageviews}
          topCountries={topCountries}
        />
    </div>
  </Protect>
  )
}