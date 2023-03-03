import * as React from 'react';
import { View, Image, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';

import styles from '../assets/Styles/styles';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {

  const [email, setEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState('');

  const image = require('../assets/little-lemon-logo-grey.png');

  const onClickAlert = () => {
    Alert.alert('', 'Thanks for subscribing,\nstayed tuned');
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginVertical: 40 }}>
        <Image source={image} style={styles.smallImageStyles} />
      </View>

      <View style={subscribeScreenStyle.innerContainer}>
        <Text style={subscribeScreenStyle.headerText}>
          Subscribe to our newletter for our latest delicious recipes;
        </Text>
      </View>

      <View style={[subscribeScreenStyle.innerContainer, { marginVertical: 12 }]}>
        <TextInput
          style={subscribeScreenStyle.textInput}
          value={email}
          placeholder={'Type your email'}
          onChangeText={(inputEmail) => {
            setEmail(inputEmail)
            setIsValidEmail(validateEmail(inputEmail))
          }
          } />
      </View>

      <View style={[subscribeScreenStyle.innerContainer]}>
        <Pressable
          onPress={onClickAlert}
          disabled={!isValidEmail}
          style={
            (isValidEmail)
              ? styles.button
              : { ...styles.button, backgroundColor: '#aaaaaa' }
          }>
          <Text style={styles.buttontText}>
            Subscribe
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubscribeScreen;

const subscribeScreenStyle = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 20

  },
  innerContainer: {
    marginHorizontal: 30

  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'black',
    backgroundColor: 'white'
  }

});