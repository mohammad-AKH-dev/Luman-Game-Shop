import { Alert } from "@mui/material";
import { Link } from "react-router-dom";

export default function Downloads() {
  return (
    <>
      <Alert
        className="text-[#ffffff99] font-primary bg-secondary flex items-center gap-x-4
          "
        severity="error"
      >
        {" "}
        <span className="text-[14px]">هیچ دانلودی در دسترس نیست.</span>{" "}
        <Link className="text-[14px]" to={"/products"}>
          مرور محصولات
        </Link>{" "}
      </Alert>
    </>
  );
}
