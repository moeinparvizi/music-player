import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full
           rounded-full
           bg-green-500
           border
           border-transparent
           px-3
           py-3
           disabled:cursor-not-allowed
           disabled:opacity-50
           text-black
           font-bold
           hover:opacity-75
           trasition
          `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "button";
// const Button = () => {
//   return (
//     <div>

//     </div>
//   );
// }

export default Button;
