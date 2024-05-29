import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { solutions } from '@/constants/solutions';
import { defaultOpenGraph, mainTitle, url } from '@/constants/seo';

import { ISolutionProps } from './types';

const getSolution = async (id: string) => {
  try {
    const solution = solutions.find((solution) => solution.id === id);

    if (!solution) {
      return notFound();
    }

    return solution;
  } catch (error) {
    console.log(error);

    return notFound();
  }
};

export async function generateStaticParams() {
  return solutions.map((solution) => {
    return { project: solution.id };
  });
}

export async function generateMetadata({ params }: ISolutionProps): Promise<Metadata> {
  const solution = await getSolution(params.id);

  const title = `${solution.projectName} | ${mainTitle}`;
  const description = solution.about;
  const canonical = `/solutions/${solution.id}`;
  const ogImage = `${url}${solution.ogImage}`;

  return {
    title: title,
    description: description,
    keywords: solution.keywords,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: canonical,
      images: {
        ...defaultOpenGraph.images,
        url: ogImage,
        alt: solution.imageAlt,
      },
    },
  };
}

const Solution = async ({ params }: ISolutionProps) => {
  const solution = await getSolution(params.id);
  
  return (
    <section>
      <div className="center-container">
        <div>
          {solution.projectName}
        </div>
      </div>
    </section>
  );
};

export default Solution;
