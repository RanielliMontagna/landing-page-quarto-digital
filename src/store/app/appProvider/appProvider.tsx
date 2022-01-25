import { useSelector } from 'hooks';
import { FC, memo } from 'react';
import AppContext from '../appContext/appContext';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const app = useSelector(({ App }) => App);

  return (
    <>
      <AppContext.Provider value={app}>{children}</AppContext.Provider>
    </>
  );
};

export default memo(AppProvider);
