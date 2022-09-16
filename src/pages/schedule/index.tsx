import type { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import { useAuth } from 'lib/auth';

const Schedule: NextPageWithLayout = () => {
  const router = useRouter();
  const { isLoggingIn } = useAuth();
  if (!isLoggingIn) {
    router.replace('/auth');
  }
  return (
    <div className="space-y-2 md:space-y-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="md:text-3xl font-extrabold">スケジュール</h1>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">中央</div>
      <div className="flex justify-center">したの方</div>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Schedule;
