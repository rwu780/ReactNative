# Styling

StyleSheet API which you can use to extract styles from the components render, keeping all the styles together. The StyleSheet API allows you to move styles away from the components render. 

Inline stling is when you keep all the styles within the components renders. As your application grows, this method of inline styling can get unmanageable very quickly and the code is harder to read

```
import { StyleSheet } from 'react-native';

<View style={{headerStyle.container}}>...</View>

const headerStyle = StyleSheet.create({
    container: {

    },
    others: {

    }

});
```