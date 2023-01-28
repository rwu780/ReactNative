# Components

Components let you split the UI into independent reusable pieces. When you put all of these independent pieces of components together, you build a complete app

- [Components](#components)
  - [Core Components](#core-components)
    - [View](#view)
    - [Text](#text)
    - [ScrollView](#scrollview)
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