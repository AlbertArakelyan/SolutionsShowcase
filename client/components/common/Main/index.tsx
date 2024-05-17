import { IMainProps } from './types';

const Main = ({ children }: IMainProps) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Main;