import * as React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Pressable } from 'react-native';

import styles from '../assets/Styles/styles.js';

const WelcomeScreen = ({ navigation }) => {

  const logoImage = require('../assets/little-lemon-logo.png')

  return (
    <View style={styles.container}>

      <View style={[styles.contentView, { flex: 1 }]}>
        <Image source={logoImage} style={styles.imageStyles} />
      </View>
      <View style={[styles.contentView]}>
        <Text style={styles.welcomeTextStyle}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.button}>
        <Pressable onPress={() => {
          navigation.navigate("Subscribe")
        }}>
          <Text style={styles.buttontText}>Newsletter</Text>
        </Pressable>

      </View>
    </View>

  );
};



export default WelcomeScreen;
