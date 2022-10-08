import { useState, useCallback } from 'react';

export const usePagination = () => {
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const setTotalPageWrapper = useCallback((t: number, perPage: number) => {
    setTotal(t);
    setTotalPage(Math.ceil(t / perPage));
  }, []);

  return {
    total,
    totalPage,
    currentPage,
    prevPage: currentPage > 1 ? currentPage - 1 : undefined,
    nextPage: currentPage < totalPage ? currentPage + 1 : undefined,
    setTotalPage: setTotalPageWrapper,
    setCurrentPage,
  };
};
