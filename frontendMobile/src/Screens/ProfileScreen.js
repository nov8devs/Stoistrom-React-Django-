import {StyleSheet, View, Text} from 'react-native'
import { mainStyle } from '../Styles/Styles';

export default function ProfileScreen({navigateTo}) {
  
    return (
      <View>
          <Text style={s.text}>This is the Profile Page!</Text>
      </View>
    );
  }
  
const s = StyleSheet.create(mainStyle)