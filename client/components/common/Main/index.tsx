import { IMainProps } from './types';

const Main = ({ children }: IMainProps) => {
  return (
    <main className="py-8">
      {children}
    </main>
  );
};

export default Main;