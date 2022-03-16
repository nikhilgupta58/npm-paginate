import React from "react";

export default function Button({page,pageNum}) {
  return (
    <button
      style={{
        width: "40px",
        height: "40px",
        fontWeight: "normal",
        border: "none",
        borderRadius: "6px",
        color: page == pageNum ? "#3762DD" : "inherit",
        backgroundColor: page == pageNum ? "#EDF1FF" : "inherit",
        fontSize: page == pageNum ? "14px" : "inherit",
        cursor: "pointer",
      }}
    >
      {pageNum}
    </button>
  );
}
