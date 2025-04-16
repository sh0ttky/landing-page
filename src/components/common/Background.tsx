import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-foreground-50 dark:bg-slate-800' : 'bg-transparent'}`}>
      {children}
    </div>
  );
};

export default Background;
