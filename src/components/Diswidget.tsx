/* eslint-disable react/no-unescaped-entities */
import { classNames } from "@/src/utils/classNames";

function usableIframe() {
  return (
    <iframe
      title="JoKeR"
      src="https://diswidgets.org/widgets/819N02GxJvGEYY7ayJ"
      width="500"
      height="500"
      // allowTransparency={true}
      // frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
}

export default function Diswidget() {
  
  return (
    <div className={classNames("block flex-wrap justify-center items-center p-1 gap-4 text-[#161616] dark:text-[#fafafa] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]")}>
      <h1 className="text-center p-4">
        <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Discord</p>
      </h1>
      <p className="text-center pb-8">
        Join my Discord server<br />It's a great place to hang out and chat with me and other people.
      </p>
      <div className="flex flex-col items-center justify-center gap-5 p-5 text-center">
        {usableIframe()}
			</div>
    </div>
  );
}