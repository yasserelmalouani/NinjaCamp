import {useCallback, useState} from 'react';

export const useImagesCachingHook = () => {
  const [imageUrl, setImageUrl] = useState('');

  const onChangeText = useCallback((value: string) => {
    setImageUrl(value);
  }, []);

  const onAddImage = useCallback(() => {}, []);

  return {
    imageUrl,
    onChangeText,
    onAddImage,
  };
};
