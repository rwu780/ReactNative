import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
  
    },
    contentView: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageStyles: {
      borderWidth: 2,
      width: 150,
      height: 260,
      resizeMode: 'contain'
    },
    smallImageStyles: {
      borderWidth: 2,
      width: 100,
      height: 120,
      resizeMode: 'contain'
    },
    welcomeTextStyle: {
      margin: 30,
      marginTop: 15,
      paddingBottom: 80,
      fontSize: 20,
      textAlign: 'center',
      color: '#495E57',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 20,
      margin: 20,
      backgroundColor: '#495E57',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#495E57'
    },
    buttontText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    }
  
  });