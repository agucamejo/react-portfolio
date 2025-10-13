import { SVGProps } from "react";

export const Study = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 21 22" {...props}>
    <g fill="none" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <path d="m4 10l8-4l8 4l-8 4zm16 0v4"></path>
      <path d="M7 12v5s.455 2 5 2c4.546 0 5-2 5-2v-5"></path>
    </g>
  </svg>
)