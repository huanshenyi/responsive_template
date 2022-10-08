import { ReactElement, useState } from 'react';

import Layout from 'components/Layout';
import type { NextPageWithLayout } from './_app';
import { useRecruitments, Pagination, RecruitmentList } from 'features/home';
import { useNotificationStore } from 'stores';
import { Spinner } from 'components/Elements';

const Home: NextPageWithLayout = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, isPreviousData } = useRecruitments({
    type: 'recruitment',
    page,
    limit: 5,
  });

  if (isLoading) {
    return (
      <div className="space-y-2 md:space-y-6">
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      </div>
    );
  }

  if (isError) {
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message: 'ネットワークエラー',
    });
  }

  if (!data?.recruitments.length) {
    return (
      <div className="space-y-2 md:space-y-6">
        <h4>No Recruitments Found</h4>
      </div>
    );
  }

  const handleClickPage = () => {
    if (!isPreviousData && page <= data.totalPage) {
      setPage((old) => old + 1);
    }
  };

  const handleClickPreviousPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  return (
    <div className="space-y-2 md:space-y-6">
      <RecruitmentList recruitmentList={data} />
      <Pagination
        currentPage={page}
        totalRecords={data.totalCount}
        totalPage={data.totalPage}
        isFetching={isFetching}
        handleClickNextPage={handleClickPage}
        handleClickPreviousPage={handleClickPreviousPage}
      />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
