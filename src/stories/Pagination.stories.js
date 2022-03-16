import React from "react";

import { storiesOf } from "@storybook/react";

import { Pagination } from "../components/Pagination";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const [page, setPage] = React.useState(1);
  const setting = {
   
  };
  return (
    <Pagination
      setPage={setPage}
      page={page}
      totalPages={20}
      setting={setting}
    />
  );
});

const Next = ({ onClick }) => {
  return <button onClick={onClick}>next</button>;
};

const Prev = ({ onClick }) => {
  return <button onClick={onClick}>prev</button>;
};

const Number = ({ onClick , pageNum}) => {
  return <button onClick={onClick}>{pageNum}</button>;
};
