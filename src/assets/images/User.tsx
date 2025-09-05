import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const UserCircle = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></path>
            <path d="M6.374 19.653a6.333 6.333 0 0 1 11.252 0M12 13.056a3.399 3.399 0 1 0 0-6.798a3.399 3.399 0 0 0 0 6.798"></path>
        </g>
    </svg>
)