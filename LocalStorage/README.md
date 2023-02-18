# Local Storage

## AsyncStorage
An asynchronous, unencrypted key-value storage system. 
- On Android, it use SQLite for the backend storage
- On iOS, it store small values in a serialized dictionary and large values in separate files

The AsyncStorage library offers a JavaScript API to simplify your storage flow. This allows you to easily save, read, merge, and delete data.
- simplicity, store values quickly
- asynchronous. read and write data
- global, accessible from anywhere

Disadv
- unencryped, risks sensitive information
- data lass, lacks data protection
- less performant, lacks optimized performance

https://reactnative.dev/docs/asyncstorage

```
setItem(key: string, value: string) // if need to store object, serialized it first => JSON.stringify(object)

getItem(key: string)

removeItem(key: string)

multiGet() // get keys values in batches

## Imports
import {AsyncStorage} from 'react-native';

## Persist Data
_storeData = async () => {
  try {
    await AsyncStorage.setItem(
      '@MySuperStore:key',
      'I like to save it.',
    );
  } catch (error) {
    // Error saving data
  }
};

## Fetching Data
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

```

## SQLite
SQLite is a popular software choice for small applicatoins that is easily installed on a mobile device. It stores data in tables that are related to one another and uses the SQL language to manipulate and query data. 

SQLite is file based with a serverless process.

Adv: 

- Operationally faster
- reliable and stable