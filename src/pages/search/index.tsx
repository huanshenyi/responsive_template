import Layout from 'components/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import type { ReactElement } from 'react';
import Image from 'next/image';
import { useAuth } from 'lib/auth';
import { useRouter } from 'next/router';

import { useTodaysDinnerState, useTodaysDinnerMutators } from 'stores';

const Search: NextPageWithLayout = () => {
  const { dinnerType } = useTodaysDinnerState();
  const { setDinner } = useTodaysDinnerMutators();
  const { isLoggingIn } = useAuth();
  const router = useRouter();

  if (!isLoggingIn) {
    router.replace('/');
  }

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="md:text-3xl font-extrabold">
            Search <span suppressHydrationWarning>{dinnerType}</span>
          </h1>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered w-full" />
              <button
                className="btn btn-square"
                onClick={() => {
                  setDinner('Chicken');
                }}
              >
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
            <table className="table-normal w-full">
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <td>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                  <td>
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
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50 break-words">
                          Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Massa sed elementum
                          tempus egestas sed. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet volutpat consequat
                          mauris nunc congue nisi vitae suscipit tellus. Posuere urna nec tincidunt praesent semper.
                          Elementum pulvinar etiam non quam lacus suspendisse.
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">
                          Sodales ut etiam sit amet nisl purus in mollis nunc. Suspendisse potenti nullam ac tortor
                          vitae purus. Eu mi bibendum neque egestas congue quisque egestas diam.
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* <!-- row 4 --> */}
                <tr>
                  <td>
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
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">
                          Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Massa sed elementum
                          tempus egestas sed. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet volutpat consequat
                          mauris nunc congue nisi vitae suscipit tellus. Posuere urna nec tincidunt praesent semper.
                          Elementum pulvinar etiam non quam lacus suspendisse.
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="btn-group">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn btn-disabled">...</button>
          <button className="btn">99</button>
          <button className="btn">100</button>
        </div>
      </div>
    </div>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
