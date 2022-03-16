import * as React from "react";
import Button from "./components/Button";
import NextBtn from "./components/NextBtn";
import PrevBtn from "./components/PrevBtn";
import { usePaginationContext } from "./utils/context";
export default function PaginationView() {
  const {
    page,
    totalPages,
    setPage,
    handler,
    nextPageHandler,
    prevPageHandler,
    pageButtons,
    NextButton,
    PrevButton,
    NumButton,
  } = usePaginationContext();
  return (
    <div
      style={{
        marginTop: "18px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "14px",
        }}
      >
        Page {page} of {totalPages}
      </p>
      <div
        style={{
          display: "flex",
        }}
      >
        <PrevButton
          page={page}
          onClick={() => {
            if (page > 1) prevPageHandler();
          }}
        />
        <div
          style={{
            margin: "0 8px",
            display: "flex",
          }}
        >
          {pageButtons.map((pageNum, id) => {
            return (
              <NumButton
                page={page}
                pageNum={pageNum}
                key={id}
                onClick={() => {
                  if (pageNum != "...") handler(pageNum);
                }}
              />
            );
          })}
        </div>
        <NextButton
          onClick={() => {
            if (page < totalPages) nextPageHandler();
          }}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
