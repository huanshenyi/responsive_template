import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#3d6fc5] text-white px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#3d6fc5] group active:text-[#2a4b85] focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 text-[#3d6fc5] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href="/">
              <a>Go Home</a>
            </Link>
          </span>
        </a>
      </button>
    </main>
  );
}
