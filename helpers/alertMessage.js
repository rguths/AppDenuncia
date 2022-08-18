import {Alert} from 'react-native';
export function alertMessage(title, message) {
    Alert.alert(
        title,
        message,
        [{ text: "Ok" }]
      );
}
