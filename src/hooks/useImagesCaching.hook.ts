import {useCallback, useState} from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';

export const useImagesCachingHook = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [cachedImages, setCachedImages] = useState<Record<string, string>>({});
  const onChangeText = useCallback((value: string) => {
    setImageUrl(value);
  }, []);

  const onAddImage = useCallback(async () => {
    if (cachedImages[imageUrl]) {
      return;
    }
    const blobImage = await ReactNativeBlobUtil.fetch('GET', imageUrl);
    const base64Image = blobImage.base64();
    setCachedImages(prevState => ({
      ...prevState,
      [imageUrl]: `data:image/jpeg;base64,${base64Image}`,
    }));
    setImageUrl('');
  }, [cachedImages, imageUrl]);

  const onResetPress = useCallback(() => {
    setCachedImages({});
  }, []);

  return {
    imageUrl,
    onChangeText,
    onAddImage,
    cachedImages,
    onResetPress,
  };
};
