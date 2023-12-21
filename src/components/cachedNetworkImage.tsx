import React, {memo, useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {fromByteArray} from 'react-native-quick-base64';

interface Props {
  imageUrl: string;
  ttl: number;
}

interface ImageRecord {
  source: string;
  ttl: number;
}

type CachedImage = Record<string, ImageRecord>;

let cachedImages: CachedImage = {};
const setImages = (url: string, data: string, ttl: number) => {
  cachedImages = {
    ...cachedImages,
    [url]: {
      ...cachedImages[url],
      ttl,
      source: data,
    },
  };
};
export const CachedNetworkImage = memo<Props>(({imageUrl, ttl}) => {
  const [localCache, setLocalCache] = useState<CachedImage>({});
  const [isLoading, setIsLoading] = useState(false);
  const onLoad = useCallback(async () => {
    try {
      if (cachedImages[imageUrl]?.source) {
        return;
      }
      setIsLoading(true);
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Failed to load image: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const base64 = fromByteArray(new Uint8Array(arrayBuffer));
      setImages(imageUrl, 'data:image/jpeg;base64,' + base64, ttl);

      setLocalCache({
        ...localCache,
        [imageUrl]: {
          ...localCache[imageUrl],
          ttl,
          source: imageUrl,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.error(`Error loading image: ${imageUrl}`, error);
    }
  }, [imageUrl, localCache, ttl]);

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
            uri: cachedImages[imageUrl]?.source ?? imageUrl,
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
