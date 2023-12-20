import React, {memo, useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {fromByteArray} from 'react-native-quick-base64';

interface Props {
  imageUrl: string;
  ttl?: number;
}

let cachedImages: Record<string, string> = {};
const setImages = (source: string, data: string) => {
  cachedImages = {
    ...cachedImages,
    [source]: data,
  };
};
const getImages = (source: string) => {
  return cachedImages[source];
};
export const CachedNetworkImage = memo<Props>(({imageUrl, ttl}) => {
  const [localCache, setLocalCache] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const onLoad = useCallback(async () => {
    try {
      if (getImages(imageUrl)) {
        return;
      }
      setIsLoading(true);
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Failed to load image: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const base64 = fromByteArray(new Uint8Array(arrayBuffer));
      setImages(imageUrl, 'data:image/jpeg;base64,' + base64);

      setLocalCache({
        ...localCache,
        [imageUrl]: 'data:image/jpeg;base64,' + base64,
      });
      setIsLoading(false);
    } catch (error) {
      console.error(`Error loading image: ${imageUrl}`, error);
    }
  }, [imageUrl, localCache]);

  console.log('IMMAGG cachedImages', cachedImages);

  useEffect(() => {
    onLoad().then();
  }, [onLoad]);

  return (
    <View style={styles.imageContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Image
          style={styles.imageStyle}
          source={{
            uri: cachedImages[imageUrl],
          }}
          resizeMode={'contain'}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 16,
  },
  imageStyle: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },
});
