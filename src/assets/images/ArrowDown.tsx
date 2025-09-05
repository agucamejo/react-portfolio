import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export const ArrowDownCircle = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1">
            <path strokeMiterlimit="10" d="M12 17.542V6.458"></path>
            <path strokeLinejoin="round" d="m6.722 12.697l4.529 4.58a1.057 1.057 0 0 0 1.499 0l4.528-4.58"></path>
            <path strokeLinejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></path>
        </g>
    </svg>
)