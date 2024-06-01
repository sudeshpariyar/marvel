import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface iPaginationProps {
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  totalResult: number;
  resultLimit: number;
}
const CustomPagination = ({
  currentPage,
  setCurrentPage,
  totalResult,
  resultLimit,
}: iPaginationProps) => {
  const maxPage = Math.floor(totalResult / resultLimit);
  return (
    <>
      {resultLimit < totalResult && (
        <Pagination className="flex justify-start ">
          <PaginationContent className="cursor-pointer">
            {currentPage >= 1 && (
              <div className="flex">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(currentPage - 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </PaginationLink>
                </PaginationItem>
              </div>
            )}
            <PaginationItem>
              <PaginationLink isActive>{currentPage}</PaginationLink>
            </PaginationItem>
            {currentPage < maxPage && (
              <div className="flex">
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(currentPage + 1)}
                  />
                </PaginationItem>
              </div>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default CustomPagination;
