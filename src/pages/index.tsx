import type { ReactElement } from 'react';
import Image from 'next/image';

import Layout from 'components/Layout';
import type { NextPageWithLayout } from './_app';
import { useRecruitments } from 'features/home/api/getRecruitments';

const Home: NextPageWithLayout = () => {
  // const recruitmentQuery = useRecruitments();

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="card card-side bg-base-200 shadow-xl">
        <figure>
          <Image src="https://api.lorem.space/image/movie?w=200&amp;h=280" alt="Movie" width={200} height={280} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Lorem ipsum dolor sit amet</h2>
          <div className="justify-start">
            <button className="btn btn-xs btn-primary">Movies</button>
            <button className="btn btn-xs btn-secondary">Watched</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</h2>
          <div className="justify-start">
            <button className="btn btn-xs btn-accent">Article</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Rhoncus dolor purus non enim. Purus viverra accumsan in nisl. Aliquam faucibus purus in
            massa. In vitae turpis massa sed elementum tempus egestas. Nisl purus in mollis nunc sed. Ullamcorper morbi
            tincidunt ornare massa eget. Enim nulla aliquet porttitor lacus luctus accumsan. Id neque aliquam vestibulum
            morbi blandit cursus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sed augue lacus viverra
            vitae.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-200 shadow-xl">
        <figure>
          <Image src="https://api.lorem.space/image/book?w=200&amp;h=280" alt="Book" width={200} height={280} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Rhoncus dolor purus non enim.</h2>
          <div className="justify-start">
            <button className="btn btn-xs btn-error">Books</button>
            <button className="btn btn-xs btn-success">Author</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Rhoncus dolor purus non enim.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Elementum pulvinar etiam non quam lacus suspendisse</h2>
          <div className="justify-start">
            <button className="btn btn-xs btn-warning">Note</button>
          </div>
          <p>
            Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas
            sed. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet volutpat consequat mauris nunc congue nisi vitae
            suscipit tellus. Posuere urna nec tincidunt praesent semper. Elementum pulvinar etiam non quam lacus
            suspendisse.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-200 shadow-xl">
        <figure>
          <Image src="https://api.lorem.space/image/game?w=200&amp;h=280" alt="Game" width={200} height={280} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sed augue lacus viverra vitae.</h2>
          <div className="justify-start">
            <button className="btn btn-xs btn-primary">Game</button>
          </div>
          <p>
            Sodales ut etiam sit amet nisl purus in mollis nunc. Suspendisse potenti nullam ac tortor vitae purus. Eu mi
            bibendum neque egestas congue quisque egestas diam.
          </p>
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

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
