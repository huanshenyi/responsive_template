import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import { queryClient } from 'lib/react-query';

const ErrorFallback = () => {
  return (
    <div className="text-red-500 w-screen h-screen flex justify-center lg:justify-start items-center" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button className="btn btn-active btn-ghost" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="animate-spin h-8 w-8 bg-blue-300 rounded-xl"></div>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {<ReactQueryDevtools />}
          <RecoilRoot>{children}</RecoilRoot>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
