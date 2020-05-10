import React from 'react';

function useMedia(query) {
   const queryList = React.useRef(window.matchMedia(query));
   const [match, setMatch] = React.useState(queryList.current.matches);

   React.useEffect(() => {
      const currentList = queryList.current;
      const handleChange = mqlEvent => setMatch(mqlEvent.matches)
      currentList.addListener(handleChange);
      return () => currentList.removeListener(handleChange);
   }, []);

   return match;
}

export default useMedia;
