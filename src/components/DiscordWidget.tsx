import WidgetBot from '@widgetbot/react-embed'

const DiscordWidget = () => (
  <div className='w-full h-full items-center justify-center p-6 gap-2 rounded-xl border border-gray-300  backdrop-blur-2xl dark:border-neutral-800  lg:rounded-xl lg:border bg-transparent'>
    <WidgetBot
      server='325761816426971137'
      channel='869517019563823104'
      width='100%'
      height='100%'
    />
    </div>
)

export default DiscordWidget