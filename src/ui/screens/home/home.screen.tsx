import React, {useCallback} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const goToDetails = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);
  return (
    <SafeAreaView>
      <Text>Welcome to NinjaCamp</Text>
      <Button title="Go to Details" onPress={goToDetails} />
    </SafeAreaView>
  );
};
