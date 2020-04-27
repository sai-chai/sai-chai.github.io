import { createContext, useContext } from 'react';

const CUSTOM_ENV_PREFIX = 'REACT_APP_';

/**
 *  create-react-app requires custom env variables to be prefixed
 *  w/ `REACT_APP_` for reasons explained [here](https://create-react-app.dev/docs/adding-custom-environment-variables/).
 *  This script gets rid of the prefixes and exposes environment
 *  variables using the Context API, making the code cleaner.
 */
const getEnv = () => {
   const env = {};
   for (const key in process.env) {
      env[key.startsWith(CUSTOM_ENV_PREFIX) ? key.slice(10) : key] =
         process.env[key];
   }
   Object.freeze(env);
   return env;
};

export const EnvContext = createContext(getEnv());

/**
 *  A cleaner way to access environment variables.
 *  See `store/env` for more documentation.
 */
const useEnv = () => useContext(EnvContext);

export default useEnv;
