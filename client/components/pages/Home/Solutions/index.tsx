import Solution from '@/components/pages/Home/Solutions/Solution';

import { solutions } from '@/constants/solutions';

const Solutions = () => {
  const solutionsContent = solutions.map((solution) => {
    return (
      <Solution
        key={solution.id}
        solution={solution}
      />
    );
  })
  return (
    <div className="grid grid-cols-4 gap-4">
      {solutionsContent}
    </div>
  );
};

export default Solutions;