import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Pagination = ({ postsPerPage, totalPosts, category , currentPage , setCurrentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-wrapper mt-16 flex flex-row-reverse flex-wrap items-center justify-center gap-8">
      <ArrowBackIcon className="cursor-pointer" />
      {pageNumbers.map((number) => (
        <Link
          key={number}
          onClick={() => setCurrentPage(number)}
          to={`/products/${number}/?category=${category}`}
          className={`px-4 py-2 ${number === currentPage && 'bg-purple'} rounded-md transition-all delay-100`}
        >
          <span>{number}</span>
        </Link>
      ))}
      <ArrowForwardIcon className="cursor-pointer" />
    </div>
  );
};

export default Pagination;
