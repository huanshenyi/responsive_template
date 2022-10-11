import Layout from 'components/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import type { ReactElement } from 'react';
import Image from 'next/image';

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
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered w-full" />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <p className="text-right">4 result found in 0.2 seconds</p>
          <div className="overflow-x-auto w-full">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <Image
                    src="https://api.lorem.space/image/face?hash=92310"
                    alt="Avatar Tailwind CSS Component"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">Result with image</div>
                <div className="text-sm opacity-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Schedule;
