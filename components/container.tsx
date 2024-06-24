import { ReactNode } from 'react';

interface config {
  children: ReactNode;
}

const Container: React.FC<config> = ({ children }) => {
  return <div className='px-48'>{children}</div>;
};

export default Container;
