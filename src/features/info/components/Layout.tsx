import * as React from 'react';
import { themeChange } from 'theme-change';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title = 'プライバシーポリシー' }: LayoutProps) => {
  React.useEffect(() => {
    themeChange(false);
  }, []);

  const router = useRouter();

  return (
    <div className="relative min-h-screen grid">
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center  lg:text-4xl ">{title}</h1>
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold">サービス 情報</h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                <Link href="/info/terms">
                  <a
                    className={clsx(
                      'block hover:underline',
                      router.pathname === '/info/terms'
                        ? 'text-blue-500 dark:text-blue-400'
                        : 'text-gray-500 dark:text-gray-300'
                    )}
                  >
                    利用契約
                  </a>
                </Link>
                <Link href="/info/privacy">
                  <a
                    className={clsx(
                      'block hover:underline',
                      router.pathname === '/info/privacy'
                        ? 'text-blue-500 dark:text-blue-400'
                        : 'text-gray-500 dark:text-gray-300'
                    )}
                  >
                    プライバシーポリシー
                  </a>
                </Link>
                <div>
                  <div className="flex gap-1 justify-center">
                    <button
                      data-set-theme="winter"
                      className="btn btn-sm btn-ghost btn-square"
                      data-act-classname="btn-active"
                    >
                      <svg
                        className="inline-block w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <title>ionicons-v5-q</title>
                        <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"></path>
                        <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"></path>
                        <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"></path>
                        <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"></path>
                        <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"></path>
                        <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"></path>
                        <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"></path>
                        <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"></path>
                        <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"></path>
                      </svg>
                    </button>
                    <button
                      data-set-theme="garden"
                      className="btn btn-sm btn-ghost btn-square"
                      data-act-classname="btn-active"
                    >
                      <svg
                        className="inline-block w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        ></path>
                      </svg>
                    </button>
                    <button
                      data-set-theme="dark"
                      className="btn btn-sm btn-ghost btn-square"
                      data-act-classname="btn-active"
                    >
                      <svg
                        className="inline-block w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <title>ionicons-v5-j</title>
                        <path d="M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* markdown適用右エリア */}
            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
