import React from "react";

export const Pagination = React.createContext(null);

export const usePaginationContext = () => {
    const context = React.useContext(Pagination);

    if (!context) {
        throw new Error("usePagination must only be used within its Provider");
    }

    return context;
};
