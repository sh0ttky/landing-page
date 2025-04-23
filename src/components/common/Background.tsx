import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-gray-50 dark:bg-slate-800' : 'bg-gray-50'}`}>
      {children}
    </div>
  );
};

export default Background;
