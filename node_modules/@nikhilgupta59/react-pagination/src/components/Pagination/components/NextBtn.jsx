import React from "react";

export default function NextBtn({onClick,page,totalPages}) {
  return (
    <button
      onClick={onClick}
      style={{
        height: "38px",
        width: "90px",
        backgroundColor: "#fff",
        border: "1px solid #D0D5DD",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "normal",
        cursor: page >= totalPages ? "not-allowed" : "pointer",
      }}
    >
      Next
    </button>
  );
}
