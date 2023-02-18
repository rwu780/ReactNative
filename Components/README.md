# Components

Components let you split the UI into independent reusable pieces. When you put all of these independent pieces of components together, you build a complete app

- [Components](#components)
  - [Core Components](#core-components)
    - [View](#view)
    - [Text](#text)
    - [ScrollView](#scrollview)
    - [FlatList](#flatlist)
    - [SectionList](#sectionlist)
    - [TextInput](#textinput)
    - [Pressable](#pressable)
      - [HitRect](#hitrect)
    - [Image](#image)
    - [ImageBackground](#imagebackground)
    - [Flexbox](#flexbox)
  - [Community components](#community-components)
  - [Native Components](#native-components)

## Core Components
Core components that do not require additional packages. They are ready to use native components that you can use to start building right away.

A greate feature of core components is that they translate into native iOS and native Android components. This means they can adapt to work with your device's native functionality without the need for specialized code. You do not need to concern yourself about how that happens. React Native takes care of the translation from JavaScript to native mobile code.

Components
- View
- Text
- Image
- TextInput
- ScrollView

### View
A view is the basic building block of the user interface. The view houses all elements within it. It's the very first component you will need in your app. View is also the most fundamental component for building your mobile UI. 

View is a container that supports the layout of your mobile screen. You can style, flexbox, touch handling, and provide accessibility controls within the view.

The view components can also be nested inside other views, and can have zero or many children within it.

### Text
Component that display text

### ScrollView
The ScrollView component must be bounded by a height (i.e `flex: 1`)

- horizontal scroll `horizontal={true}`
- scroll indicator `indicatorStyle={'white'}`

However, slow rendering/performance for large lists

`keyboardDismissMode` : dismisses virtual keyboard when user scrolls

### FlatList
- Faster performance than ScrollView. Rendering performance not affected by size of the list
- Lazy rendering, only render the item shown on screen

```
<FlatList
  data={items}
  keyExtractor= {extractor}
  renderItem={renderItem} />

const extractor = (item) => item.id

const renderItem = ({item}) => {
  <Item name={item.name} />;
}

```

### SectionList
React Native component, combineds FlatList features with section support
- Lazy rendering
- Inherits ScrollView props
- differs
  - It provide sections headers and section separators


```
<SectionList
  sections={items} // array of list sections
  renderItem={renderItem} // default renderer
  />

```

### TextInput

```
const [text, onChangeText] = useState('');

<TextInput
  style={styles.input} // pass styles to TextInput
  onChangeText={onChangeText} // callback to handle 
  placeholder="First Name" // default text in input box
  value={firstName} // value displated in input box
  keyboardType="numeric"
>

```

### Pressable
Pressable is a core component from React Native. It can detect various stages of press interactions from the user, including on any child componens. The Pressable component is wrapped around its child elemtns which then become Pressable by the user.

```
<Pressable 
  onPress={onPressFunction}
  onPressIn={...} // call when press activated
  onPressOut={...} // call when press deactivated, when user's finger move away from the element
  onLongPress={...} // call when long press, default 500ms or longer
  delayLongPress // customized onLongPress timing

  >
  <Text>I'm pressable</Text>

</Pressable>

```

#### HitRect
HitRect is an optional feature of the Pressable component that you can use to define how far from the React element that a touch is registered. 

### Image
Core component for displaying images
- `loadingIndicatorSource` : render the loading indicator

```
<Image
  source={require('./img/image.png')} // load local images
  source={{uri:'https://...'}} // load network images
  loadingIndicatorSource={}
  />

```

### ImageBackground
Display background image

### Flexbox
A component can specify the layout of its children using the Flexbox algorithm. Flexbox is designed to provide a consistent layout on different screen sizes.

- `flex`
  - define how your items are going to "fill" over the availabe space along your main axis.
  - Space will be divided according to each element's flex property
- `flexDirection`
  - controsl the direction in which the children of a node are laid out. This is also referred to as the main axis.
  - `column` : align children from top-to-bottom
  - `row` : align children from left to right
  - `column-reverse` : align children from bottom to top
  - `row-reverse` : align children from right to left
- `direction`
  - specify the direction in which children and text in a hierarchy should be laid out
  - `ltr` : text and children are laid out from left to right
  - `rtl` : text and children are laid out from right to left
- `justifyContent`
  - how to align children within the main axis of their container
  - `flex-start` : align to the start of the container's main axis
  - `flex-end` : align to the end of the container's main axis
  - `space-between` : evenly space off children across main axis
  - `space-around`
  - `space-evenly`
- `alignItems`
  - how to align children along the cross axis of their container
  - `stretch` : default, stretch children's height to match the container's height
  - `flex-start` : align children to the start of cross-axis
  - `flex-end` : align children to the end of the container's cross axis
  - `center` : center of the cross axis
  - `baseline` : align children of a container along a common baseline







## Community components
Addition from the core components

React Native relies heavily on the use of community components, the original package by itself is quite lean. You can choose the community components based on the needs of your app.

i.e
- React navigation
- React Native screens
- React Native maps
- React Native videio
- etc.

## Native Components
React Native lets you build custom iOS or Android components based on your applications' unique needs. These are your native components and you own them. These are written in native code, which means working with native iOS code in Swift, or native Android code in Java or Kotlin.