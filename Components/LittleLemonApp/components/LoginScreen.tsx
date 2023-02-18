import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, TextInput, Alert, Pressable, Image, View, ImageBackground } from 'react-native';

export default function LoginScreen({navigation}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    const image = require('./image.png');

    return (
        <ScrollView style={styles.container} keyboardDismissMode="interactive">
            <View style={styles.logoView}>
                <Image style={styles.imageStyle} source={image} />
            
                <Text style={styles.logoText}>Little Lemon</Text>
            </View>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {!isLoggedIn
                ? (<>
                    <Text style={styles.regularText}>Login to continue</Text>
                    <TextInput
                        style={styles.textInput} value={email} onChangeText={onChangeEmail} placeholder={'Email'} keyboardType={'email-address'}
                        // onFocus={() => { Alert.alert("First name is focussed") }}
                        // onBlur={() => {
                        //     Alert.alert("First anme is now blurred")
                        // }}
                        clearButtonMode="always"
                    />
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={onChangePassword}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        clearButtonMode="while-editing" />
                    <Pressable style={styles.button} onPress={() => setIsLoggedIn(!isLoggedIn)}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </Pressable>
                </>
                )
                : (
                    <>
                        <Text style={styles.headerText}>You are logged in!</Text>
                        <Pressable style={styles.button} onPress={() => setIsLoggedIn(!isLoggedIn)}>
                            <Text style={styles.buttonText}>Log out</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate("Welcome")}>
                            <Text style={styles.buttonText}>Go to Welcome</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate("Preference")}>
                            <Text style={styles.buttonText}>Go to Preference</Text>
                        </Pressable>
                    </>
                    
                )
            }


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57'
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EFEFEE',
        textAlign: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        fontSize: 16,
    },
    button: {
        fontSize: 22,
        padding: 10,
        borderWidth: 2,
        marginVertical: 8,
        margin: 100,
        borderColor: '#EE9972',
        borderRadius: 50,
        backgroundColor: '#EE9972'
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25
    },
    imageStyle: {
        width:100,
        height: 100,
        borderRadius: 20
    },
    logoView: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin:10
    },
    logoText: {
        fontSize:30,
        textAlign: 'center',
        color:"#EDEFEE",
        padding:20
    }
});