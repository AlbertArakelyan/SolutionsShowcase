import Image from 'next/image';
import Link from 'next/link';

import { ISolutionProps } from '@/components/pages/Home/Solutions/types';

const Solution = ({ solution }: ISolutionProps) => {
  const technologiesContent = solution.technologies.map((technology) => {
    return (
      <div className="w-10 h-10" key={technology.name}>
        <Image
          className="size-full block"
          key={technology.name}
          src={technology.icon}
          alt={technology.name}
          title={technology.name}
          width={40}
          height={40}
        />
      </div>

    );
  })

  return (
    <div className="shadow-card rounded-2xl overflow-hidden bg-white flex flex-col items-start justify-start    ">
      <div className="h-[15.0625rem] w-full">
        <Image
          className="h-full w-full block"
          src={solution.image}
          alt={solution.projectName}
          width={241}
          height={178}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start p-4 flex-1">
        <div>
          <h3 className="text-2xl font-bold">{solution.projectName}</h3>
          <p className="text-lg line-clamp-5">{solution.about}</p>
        </div>
        <div className="flex items-center justify-start flex-wrap gap-2 my-2">
          {technologiesContent}
        </div>
        <div className="flex items-center justify-start gap-2 mt-auto">
          <a href={solution.repositories[0].url} target="_blank">
            <button className="button-primary">
              Repo
            </button>
          </a>
          <Link href={`/${solution.id}`}>
            <button className="button-primary">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solution;
