import { ScrollView, Text, View } from "react-native";

export default function WelcomeScreen () : JSX.Element {
    return (
        <ScrollView indicatorStyle={"white"}>
        <View style={{
            justifyContent: 'center',
            padding: 40
        }}>
            <Text style={{
                color: '#EDEFEE',
                fontSize: 50,
                textAlign: 'center'
                
            }}>
                Welcome to Little Lemon
            </Text>
        </View>
        
        <View style={{
            padding: 38,
            justifyContent: 'center',
            paddingHorizontal: 20
        }}>
            <Text style={{
                color: '#EDEFEE',
                fontSize: 38,
                textAlign: 'center'
            }}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
        </ScrollView>
    )

}