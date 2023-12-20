import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import {useImagesCachingHook} from './hooks/useImagesCaching.hook';
import {CachedNetworkImage} from './components/cachedNetworkImage';

const images = [
  'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
  'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://www.learningcontainer.com/wp-content/uploads/2020/07/Large-Sample-Image-download-for-Testing.jpg',
];
const App: React.FC = () => {
  const {index, onNextImage, onResetPress} = useImagesCachingHook();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.addButton}>
          <Button
            title={'Add'}
            color={'white'}
            onPress={images.length - 1 === index ? onResetPress : onNextImage}
          />
        </View>
        <View style={styles.imageContainer}>
          <CachedNetworkImage imageUrl={images[index]} />
        </View>
      </View>
      <View style={styles.resetButton}>
        <Button title={'Reset'} color={'white'} onPress={onResetPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 16,
    backgroundColor: '#8e8e93',
  },
  textInput: {
    flex: 4,
    borderColor: '#E5E5E5',
    height: 50,
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    borderWidth: 1,
  },
  addButton: {
    marginHorizontal: 10,
    backgroundColor: '#3478f6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#e36159',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: 16,
  },
});

export default App;
