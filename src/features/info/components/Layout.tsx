import * as React from 'react';
import { themeChange } from 'theme-change';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { useAuth } from 'lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title = 'プライバシーポリシー' }: LayoutProps) => {
  React.useEffect(() => {
    themeChange(false);
  }, []);

  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="relative min-h-screen grid">
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">{title}</h1>
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">サービス 情報</h1>

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
