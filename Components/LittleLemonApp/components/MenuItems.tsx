import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native";

const green = '#495E57'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb1228ba',
        title: 'First Item 123',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa9127f63',
        title: 'Second Item 345',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d1272',
        title: 'Third Item 1232',
      },
  ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const Separator = () => {
    <View style={styles.separator} />
  }
  
  
  const MenuItems = () => {
  
    return (
      <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem= {
        ({item}) => <Item title={item.title} />
      }
      ItemSeparatorComponent={Separator}
       />
    );
  };

  export default MenuItems;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: 'white'
    }
  });

