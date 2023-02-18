import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from "react-native";

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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MenuItem = ({title, price}) => (
  <View style={[styles.item, styles.menuItem, {justifyContent: 'space-between'}]}>
    <Text style={[styles.title]}>{title}</Text>
    <Text style={[styles.title]}>{price}</Text>
  </View>
);

const Separator = () => {
  <View style={styles.separator} />
}


const MenuItems = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {

      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'
      );

      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getMenu();

  }, []);

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => <Item title={item.title} />
        }
        ItemSeparatorComponent={Separator}
      />

      <View style={{
        height: 20,
        backgroundColor: 'black',
        margin: 20
        
      }}></View>

      <View style={{
        backgroundColor: 'white',
        flex: 1
      }}>
        {isLoading
          ? (<ActivityIndicator />)
          : (
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={
                ({ item }) => <MenuItem title={item.title} price={item.price} />
              }
            />)
        }

      </View>
    </>
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
  menuItem: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  title: {
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'white'
  },
});

