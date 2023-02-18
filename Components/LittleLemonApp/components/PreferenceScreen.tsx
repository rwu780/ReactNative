import * as React from 'react';
import { Text, View, StyleSheet, Switch, StatusBar} from 'react-native';

export default function PreferenceScreen() {

    const [preferences, setPreferences] = React.useState({
        pushNotification: false,
        emailMarketing: true,
        latestNews: true
    });

    // const updateState = (key) => {
        
    //     let newState = {
    //         ...preferences,
    //         [key]: !preferences[key]
    //     }
        
    //     console.log("abcde", newState)
    //     // setPreferences(newState)
    // }

    const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

    // const updateState = (key) => () => 
    //     setPreferences((prevState) => ({
    //         ...prevState,
    //         [key]: !prevState[key],
    //     }))

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Preferences</Text>
            <View style={styles.row} >
                <Text>Push notifications</Text>
                <Switch
                    value={preferences.pushNotification}
                    onValueChange={updateState('pushNotification')}
                     />
            </View>
            <View style={styles.row} >
                <Text>Marketing emails</Text>
                <Switch value={preferences.emailMarketing}
                    onValueChange={updateState('emailMarketing')}
                />
            </View>
            <View style={styles.row} >
                <Text>Latest news</Text>
                <Switch value={preferences.latestNews} onValueChange={updateState('latestNews')} />
            </View>
        
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#ecf0f1',
      padding: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 16,
    },
    header: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });