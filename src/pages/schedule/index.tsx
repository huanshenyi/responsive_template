import Layout from 'components/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import type { ReactElement } from 'react';
import Image from 'next/image';

import { Calender } from 'features/schedule';

const Schedule: NextPageWithLayout = () => {
  return (
    <div className="space-y-2 md:space-y-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="md:text-3xl font-extrabold">schedule</h1>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <p className="text-right">4 result found in 0.2 seconds</p>
          <div className="overflow-x-auto w-full">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold">Result with image</div>
                <div className="text-sm opacity-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
          <Calender />
        </div>
      </div>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Schedule;
