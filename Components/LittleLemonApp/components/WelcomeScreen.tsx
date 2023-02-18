import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function WelcomeScreen({ navigation }): JSX.Element {
    return (
        <ScrollView style={{ backgroundColor: '#495E57' }} indicatorStyle={"white"}>
            <View style={{
                justifyContent: 'center',
                margin: 20,
                flexDirection: 'row',
                // backgroundColor: '#ffe185',
                alignItems:'center'
                
            }}>
                <Text style={{
                    color: '#EDEFEE',
                    fontSize: 30,
                    // textAlign: 'center'

                }}>
                    Little Lemon
                </Text>
                <Image
                    style={{
                        width: 50,
                        height: 50
                    }}
                    source={{
                        uri: 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/little-lemon-logo.png'
                    }} />
            </View>

            <View style={{
                padding: 38,
                justifyContent: 'center',
                paddingHorizontal: 20
            }}>
                <Text style={{
                    color: '#EDEFEE',
                    fontSize: 20,
                    textAlign: 'center'
                }}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </View>
            <View style={{
                backgroundColor: '#f9c2ff',
                margin: 30,
                padding: 40
            }}>
                <Pressable onPress={() => { navigation.navigate("Menu") }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#EDERFE'
                    }}>View Menu Item</Text>
                </Pressable>

            </View>

        </ScrollView>
    )

}