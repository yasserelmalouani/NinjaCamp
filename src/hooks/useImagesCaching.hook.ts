import {useCallback, useState} from 'react';

export const useImagesCachingHook = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [cachedImages, setCachedImages] = useState<Record<string, string>>({});
  const onChangeText = useCallback((value: string) => {
    setImageUrl(value);
  }, []);

  const onAddImage = useCallback(() => {
    if (cachedImages[imageUrl]) {
      return;
    }
    setCachedImages(prevState => {
      return {
        ...prevState,
        [imageUrl]: imageUrl,
      };
    });
  }, [cachedImages, imageUrl]);
  console.log('CACHED_IMAGES', cachedImages);
  return {
    imageUrl,
    onChangeText,
    onAddImage,
    cachedImages,
  };
};
