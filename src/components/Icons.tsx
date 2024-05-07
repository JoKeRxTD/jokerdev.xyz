import * as React from "react";
import { IconSvgProps } from "@/src/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ZapHostingIcon = ({
  size = 32,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    width={size || width}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 400"
  >
    <path
      d="M232.28700256347656,74.43946075439453C232.28700256347656,74.43946075439453,458.29595947265625,70.85202026367188,458.29595947265625,70.85202026367188C458.29595947265625,70.85202026367188,224.21524047851562,295.964111328125,224.21524047851562,295.964111328125C224.21524047851562,295.964111328125,462.7802734375,288.78924560546875,462.7802734375,288.78924560546875"
      fill="none"
      strokeWidth="100"
      stroke='url("#SvgjsLinearGradient1002")'
      strokeLinecap="round"
      strokeDasharray="0 0"
      strokeOpacity="0.79"
      transform="matrix(1.2155062500000002,0,0,1.2155062500000002,-17.52361480197908,-22.933650275325817)"
    ></path>
    <defs>
      <linearGradient
        id="SvgjsLinearGradient1002"
        gradientTransform="rotate(182, 0.5, 0.5)"
      >
        <stop stopColor="hsl(105, 69%, 40%)" offset="0"></stop>
        <stop stopColor="hsl(88, 92%, 24%)" offset="1"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const PlusIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>
);


export const Activity = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
);

export const Flash = ({
  fill = "currentColor",
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
);
export const Server = ({
  fill = "currentColor",
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
);
export const TagUser = ({
  fill = "currentColor",
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
);
export const Scale = ({
  fill = "currentColor",
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
);


export const ChevronDown = ({
  fill = "currentColor",
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        fill="full"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
);

export const BackgroundSVG = ({
  //make the size fit 1920x1080
  size = 1920,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // xmlnsSvgjs="http://svgjs.dev/svgjs"
    viewBox="0 0 1422 800"
  >
    <g
      shapeRendering="crispEdges"
      strokeLinejoin="round"
      fill="none"
      strokeWidth="1"
      stroke="hsl(220, 62%, 45%)"
    >
      <polygon points="1244.25,100 1422,100 1244.25,0"></polygon>
      <polygon points="1066.5,0 1244.25,100 1066.5,100"></polygon>
      <polygon points="1244.25,200 1066.5,100 1244.25,100"></polygon>
      <polygon points="1244.25,200 1422,100 1422,200"></polygon>
      <polygon points="888.75,100 1066.5,100 888.75,0"></polygon>
      <polygon points="711,0 888.75,0 711,100"></polygon>
      <polygon points="711,200 888.75,100 888.75,200"></polygon>
      <polygon points="1066.5,100 1066.5,200 888.75,200"></polygon>
      <polygon points="1066.5,300 1066.5,200 888.75,200"></polygon>
      <polygon points="888.75,200 888.75,300 711,200"></polygon>
      <polygon points="888.75,300 711,300 888.75,400"></polygon>
      <polygon points="1066.5,400 1066.5,300 888.75,400"></polygon>
      <polygon points="1422,400 1422,200 1066.5,400"></polygon>
      <polygon points="711,0 711,100 533.25,100"></polygon>
      <polygon points="533.25,100 533.25,0 355.5,100"></polygon>
      <polygon points="533.25,100 355.5,200 355.5,100"></polygon>
      <polygon points="711,200 711,100 533.25,200"></polygon>
      <polygon points="0,0 355.5,200 0,200"></polygon>
      <polygon points="355.5,300 355.5,200 177.75,300"></polygon>
      <polygon points="177.75,200 177.75,300 0,200"></polygon>
      <polygon points="0,400 0,300 177.75,400"></polygon>
      <polygon points="355.5,300 355.5,400 177.75,400"></polygon>
      <polygon points="711,300 533.25,300 533.25,200"></polygon>
      <polygon points="533.25,300 355.5,300 355.5,200"></polygon>
      <polygon points="533.25,400 355.5,400 533.25,300"></polygon>
      <polygon points="711,300 533.25,300 533.25,400"></polygon>
      <polygon points="533.25,400 711,500 533.25,500"></polygon>
      <polygon points="355.5,400 355.5,500 533.25,400"></polygon>
      <polygon points="355.5,500 533.25,600 533.25,500"></polygon>
      <polygon points="711,500 533.25,600 711,600"></polygon>
      <polygon points="355.5,500 177.75,400 355.5,400"></polygon>
      <polygon points="177.75,400 0,500 177.75,500"></polygon>
      <polygon points="177.75,600 0,600 177.75,500"></polygon>
      <polygon points="177.75,500 355.5,500 177.75,600"></polygon>
      <polygon points="355.5,600 355.5,800 0,600"></polygon>
      <polygon points="711,600 533.25,700 533.25,600"></polygon>
      <polygon points="533.25,600 355.5,600 355.5,700"></polygon>
      <polygon points="533.25,700 355.5,700 355.5,800"></polygon>
      <polygon points="711,700 711,800 533.25,700"></polygon>
      <polygon points="1422,600 1422,400 1066.5,400"></polygon>
      <polygon points="1066.5,500 888.75,500 1066.5,400"></polygon>
      <polygon points="888.75,400 711,500 888.75,500"></polygon>
      <polygon points="711,500 888.75,600 711,600"></polygon>
      <polygon points="888.75,600 888.75,500 1066.5,500"></polygon>
      <polygon points="1066.5,800 1066.5,600 711,800"></polygon>
      <polygon points="1066.5,800 1422,600 1066.5,600"></polygon>
    </g>
    <g
      fill="hsl(220, 62%, 45%)"
      strokeWidth="3"
      stroke="hsl(220, 43%, 13%)"
    ></g>
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const OpenIssues = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  aria-hidden="true"
  focusable="false"
  height={size || height}
  role="presentation"
  viewBox="0 0 24 24"
  width={size || width}
  {...props}
  >
  <path 
  fill="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={1.0}
  d="m23.561,21.439l-5.514-5.514c1.225-1.66,1.959-3.703,1.959-5.92C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.217,0,4.26-.734,5.92-1.959l5.514,5.514c.293.293.677.439,1.061.439s.768-.146,1.061-.439c.586-.585.586-1.536,0-2.121Zm-13.555-4.434c-3.859,0-7-3.14-7-7s3.141-7,7-7,7,3.14,7,7-3.141,7-7,7Zm1.494-2.506c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm1.5-6.5c0,1.125-.621,2.146-1.621,2.665-.262.136-.348.2-.375.229.002.004-.004.04-.004.107,0,.552-.447,1-1,1s-1-.448-1-1c0-1.354.913-1.828,1.458-2.111.335-.173.542-.514.542-.889,0-.551-.448-1-1-1s-1,.449-1,1-.447,1-1,1-1-.448-1-1c0-1.654,1.346-3,3-3s3,1.346,3,3Z"/>
</svg>
);

export const Fork = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
    >
      <path
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.0} 
      d="M24,4c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.277,3.428,3,3.873v.127c0,1.654-1.346,3-3,3h-1c-1.193,0-2.267,.525-3,1.357-.733-.832-1.807-1.357-3-1.357h-1c-1.654,0-3-1.346-3-3v-.127c1.723-.445,3-2.013,3-3.873C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.277,3.428,3,3.873v.127c0,2.757,2.243,5,5,5h1c1.103,0,2,.897,2,2v1.127c-1.723,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.277-3.428-3-3.873v-1.127c0-1.103,.897-2,2-2h1c2.757,0,5-2.243,5-5v-.127c1.723-.445,3-2.013,3-3.873ZM2,4c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2ZM14,20c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm6-14c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/>
      
      </svg>
  );
export const Stars = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}>
    <path 
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/>
  </svg>
  );

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
