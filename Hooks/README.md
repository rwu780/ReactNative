# Hooks

Hooks let you use state and other React features without writing a class. It mainly uses to handle the state and side effects in react functional components

- [Hooks](#hooks)
  - [useColorScheme](#usecolorscheme)
  - [useEffect](#useeffect)
  - [useWindowDimensions](#usewindowdimensions)
- [Community Hooks](#community-hooks)
  - [useDeviceOrientationHook](#usedeviceorientationhook)
  - [useAppStateHook](#useappstatehook)

## useColorScheme
This hook provides and subscribe to color scheme updates from the appearance module in react native

It can return three possible options
- `light`
- `dark`
- `null` : user has not indciated a preferred color theme

```
const colorScheme = useColorScheme();

colorScheme === 'light' ? 'white' : 'black'


```

## useEffect
The Effect hook lets you perform side effects in function components. A React side-effect occurs when we use something that is outside the scope of React
- Data fetching, 
- setting up a subscription, and 
- manually chaning the DOM in React componentns

**What does useEffect do?**
By using this Hook, you tell React that your component needs to do something after render.

**Does useEffect run after every render?**
Yes, by default, it runs both after the first render and after every update. React guarantees the DOM has been updated by the time it runs the effects

**Effects without cleanup**. We can say that we can run them and immediately forget about them
- network requests
- manual DOM mutations
- logging



## useWindowDimensions
Retrieve information about the Windows height and width values

```
import {useWindowDimentions} from 'react-native';
const {width, height, fontScale} = useWindowDimensions();
```


# Community Hooks
[Community Hooks](https://github.com/react-native-community/hooks)

```
# Install
npm install @react-native-community/hooks


```

## useDeviceOrientationHook
This hook determine if the user's mobile device is viewed in landscape or portrait mode

```
import { useDeviceOrientation } from '@react-native-community/hooks' 

const orientation = useDeviceOrientation() 
 
console.log('is orientation portrait: ', orientation.portrait) 
console.log('is orientation landscape: ', orientation.landscape) 

```

## useAppStateHook
This hook is used to determine the current app state
- active
- background
- inactive (iOS only)
