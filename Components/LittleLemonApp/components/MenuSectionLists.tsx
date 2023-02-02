
import { View, Text, StyleSheet, SectionList } from 'react-native'

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            'Hummus',
            'Moutabal',
            'Falafel',
            'Marinated Olives',
            'Kofta',
            'Eggplant Salad',
        ],
    },
    {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
        title: 'Sides',
        data: [
            'Fries',
            'Buttered Rice',
            'Bread Sticks',
            'Pita Pocket',
            'Lentil Soup',
            'Greek Salad',
            'Rice Pilaf',
        ],
    },
    {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
];

const Item = ({name}) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
    </View>

);

const Separator = () => (
    <View style={menuStyles.separator} />
);


export default function MenuSectionItems() {

    const renderItem = ({item}) => (<Item name={item} />);

    const renderSectionHeader = ({section: {title}}) => (
        <Text style={menuStyles.sectionHeader}>{title}</Text>
    );

    const renderSectionFooter = () => (
        <Text style={menuStyles.footerText}>
            All Rights Reserved by Little Lemon 2022
        </Text>
    );

    return (
        <View style={ menuStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={Separator}
                ListFooterComponent={renderSectionFooter}
                keyExtractor={(item, index) => item + index}
            />
        </View>

    );
}

const menuStyles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 32,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
    footerText: {
      color: '#EDEFEE',
      fontSize: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
  });