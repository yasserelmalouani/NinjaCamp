import {useCallback, useState} from 'react';

export const useImagesCachingHook = () => {
  const [index, setIndex] = useState(0);

  const onNextImage = useCallback(() => {
    setIndex(prevState => prevState + 1);
  }, []);

  const onResetPress = useCallback(() => setIndex(0), []);

  return {
    index,
    onNextImage,
    onResetPress,
  };
};
