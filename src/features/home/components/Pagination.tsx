type PaginationProps = {
  currentPage: number;
  totalPage: number;
  totalRecords: number;
  isFetching: boolean;
  handleClickNextPage: () => void;
  handleClickPreviousPage: () => void;
};

export const Pagination = ({
  currentPage,
  totalPage,
  isFetching,
  handleClickNextPage,
  handleClickPreviousPage,
}: PaginationProps) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => {
              handleClickPreviousPage();
            }}
            disabled={currentPage === 1}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          {isFetching ? (
            <button className="btn"> Loading...</button>
          ) : (
            <button className="btn btn-disabled">{currentPage}</button>
          )}
          <button
            className="btn"
            onClick={() => {
              handleClickNextPage();
            }}
            disabled={currentPage === totalPage}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
