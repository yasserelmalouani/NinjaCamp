import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {useImagesCachingHook} from './hooks/useImagesCaching.hook';

const App: React.FC = () => {
  const {imageUrl, onChangeText, onAddImage} = useImagesCachingHook();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.inputAndButtonContainer}>
          <TextInput
            value={imageUrl}
            onChangeText={onChangeText}
            style={styles.textInput}
          />
          <View style={styles.button}>
            <Button
              disabled={!imageUrl.length}
              title={'Add'}
              color={'white'}
              onPress={onAddImage}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://images.unsplash.com/photo-1695653422676-d9dd88400e21?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
        </View>
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
  inputAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
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
  button: {
    flex: 2,
    marginHorizontal: 10,
    backgroundColor: '#3478f6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: 16,
  },
  imageStyle: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },
});

export default App;
