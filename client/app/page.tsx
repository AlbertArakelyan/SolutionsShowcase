import { Metadata } from 'next';

import Solutions from '@/components/pages/Home/Solutions';

import { defaultOpenGraph, mainTitle, mainDescription } from '@/constants/seo';

const title = `Albert Arakelyan | ${mainTitle}`;
const canonical = '/';

export const metadata: Metadata = {
  title,
  description: mainDescription,
  alternates: {
    canonical: canonical,
  },
  openGraph: {
    ...defaultOpenGraph,
    title,
    url: canonical,
  },
};

const Home = () => {
  return (
    <section>
      <div className="center-container">
        <Solutions />
      </div>
    </section>
  );
};

export default Home;
