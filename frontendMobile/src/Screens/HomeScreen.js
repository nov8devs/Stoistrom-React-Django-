import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { mainStyle } from '../Styles/Styles';

export default function HomeScreen({navigateTo}) {
  const navJournal = () => {
      navigateTo('Journaling');
  };

  return (
    <View style={s.container}>
        <Text style={s.text}>Welcome to Stoistrom!</Text>
        <TouchableOpacity style={s.button} onPress={navJournal}>
          <Text style={s.buttonText}>Start Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.button}>
          <Text style={s.buttonText}>View Journals</Text>
        </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create(mainStyle);
