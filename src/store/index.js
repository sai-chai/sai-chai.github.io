import React from 'react';
import useEnv, { EnvContext } from './env';

const StoreProvider = props => {
   const env = useEnv();

   return (
      <EnvContext.Provider value={env}>{props.children}</EnvContext.Provider>
   );
};

export { useEnv };
export default StoreProvider;
