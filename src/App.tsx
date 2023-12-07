/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

const PASSWORD_RULES = '^[A-Za-z.,\\s]*$';
const regex = new RegExp(PASSWORD_RULES);

const App: React.FC<any> = () => {
  const [text, setText] = useState<string>();
  const [isChecking, setIsChecking] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onChangeText = useCallback((str: string) => {
    setText(str);
    setIsChecking(true);
    if (str === '') {
      setIsChecking(false);
      setIsValid(false);
      return;
    }
    setTimeout(() => {
      const isPasswordValid = regex.test(str);
      if (isPasswordValid) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
      setIsChecking(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Header />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeText}
          />
          {isChecking ? (
            <ActivityIndicator size={'large'} color={'grey'} />
          ) : null}
          {isValid && !isChecking ? (
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png',
              }}
              resizeMode={'contain'}
              style={styles.iconSize}
            />
          ) : null}
          {!isValid && !isChecking && text?.length ? (
            <Image
              source={{
                uri: 'https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png',
              }}
              resizeMode={'contain'}
              style={styles.iconSize}
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    flex: 2,
    fontSize: 20,
    borderWidth: 1,
    height: 50,
  },
  iconSize: {
    width: 40,
    height: 40,
  },
});

export default App;
