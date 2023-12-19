import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

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
            <Button title={'Add'} color={'white'} onPress={onAddImage} />
          </View>
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
});

export default App;
