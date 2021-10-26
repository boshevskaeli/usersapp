import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUsers = async (value) => {
  try {
    await AsyncStorage.setItem('@users', value);
  } catch (e) {
    // saving error
    console.log('Error saving users', e);
  }
};

const getUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@users');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
    console.log('Error reading users', e);
  }
};
