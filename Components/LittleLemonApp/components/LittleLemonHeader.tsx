import { View, Text, StyleSheet } from 'react-native';

function LittleLemonHeader(): JSX.Element {

    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>Little Lemon</Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14'
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    }

});

export default LittleLemonHeader;