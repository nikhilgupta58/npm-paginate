import * as React from "react";
import Button from "./components/Button";
import NextBtn from "./components/NextBtn";
import PrevBtn from "./components/PrevBtn";
import PaginationView from "./Pagination.view";
import { Pagination } from "./utils/context";
export default function PaginationContainer({
  page,
  setPage,
  totalPages,
  setting,
}) {
  if (!totalPages || totalPages <= 1) return <></>;
  const nextPageHandler = () => {
    handler(page + 1);
  };
  const prevPageHandler = () => {
    handler(page - 1);
  };
  const [pageButtons, setPageButtons] = React.useState([]);
  React.useEffect(() => {
    if (totalPages > 6) {
      let arr = [];
      if (page <= 2) arr = [1, 2, 3, "...", totalPages];
      else if (page >= totalPages - 1)
        arr = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      else {
        if (page == 3) arr = [1, 2, 3, 4, "...", totalPages];
        else if (page === totalPages - 2)
          arr = [
            1,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        else {
          arr = [1, "...", page - 1, page, page + 1, "...", totalPages];
        }
      }
      setPageButtons(arr);
    } else {
      const arr = [];
      Array.from({ length: totalPages }, (v, i) => i + 1).map((number) => {
        arr.push(number);
      });
      setPageButtons(arr);
    }
  }, [page, totalPages]);

  function handler(pageNum) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(pageNum);
  }

  const NextButton = setting?.NextButton ? setting?.NextButton : NextBtn;
  const PrevButton = setting?.PrevButton ? setting?.PrevButton : PrevBtn;
  const NumButton = setting?.NumberButton ? setting?.NumberButton : Button;

  return (
    <Pagination.Provider
      value={{
        page: page,
        setPage: setPage,
        totalPages: totalPages,
        nextPageHandler: nextPageHandler,
        prevPageHandler: prevPageHandler,
        handler: handler,
        pageButtons: pageButtons,
        NextButton,
        PrevButton,
        NumButton,
      }}
    >
      <PaginationView />
    </Pagination.Provider>
  );
}
