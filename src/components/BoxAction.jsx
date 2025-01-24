import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
export default function BoxAction({ children, title, onShow }) {
  const [isPending, setIsPending] = useState(false);
  return (
    <div
      title={title}
      onClick={() => {
        setIsPending(true)
        setTimeout(() => {
          onShow();
          setIsPending(false)
        }, [3000]);
      }}
      className="action w-[40px] h-[40px] cursor-pointer invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all 
         hover:scale-125 bg-secondary flex items-center justify-center rounded-3xl
          duration-150 delay-75
         "
    >
      {isPending ? <CircularProgress size="20px" color="secondary"/> : children}
    </div>
  );
}
