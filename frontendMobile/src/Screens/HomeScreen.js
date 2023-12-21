import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing, Text, View, TouchableOpacity } from 'react-native';
import { mainStyle } from '../Styles/Styles';
import JournalingChoices from '../Components/JournalingChoices';
import Habits from '../Components/Habits';
import dateTimeFormat from '../Utils/DateTimeFormat';


const s = StyleSheet.create(mainStyle);

export default function HomeScreen({navigation}) {

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [journalChoicesVisible, setJournalChoicesVisible] = useState(false)
  const openJournalChoices = () => setJournalChoicesVisible(true);
  const closeJournalChoices = () => setJournalChoicesVisible(false);

  const fade = new Animated.Value(0.25);

  useEffect(() => {
    if (journalChoicesVisible) {
      Animated.timing(fade, {
        toValue: 0.25,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fade, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [journalChoicesVisible]);

  return (
    <Animated.View style={[s.container, {opacity: fade}]}>
        <Text style={s.text}>This is the Home Page!</Text>
        <Text>{dateTimeFormat(currentTime)}</Text>
        <View style={s.row}>
          <TouchableOpacity style={s.button} onPress={openJournalChoices}>
            <Text style={s.buttonText}>Start Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.button} onPress={() => navigation.navigate("View Journals")}>
            <Text style={s.buttonText}>View Journals</Text>
          </TouchableOpacity>
        </View>
        <View style={s.horizontalLine} />
        <View style={s.myHabits.tab}>
          <View style={s.row}>
            <Text style={s.myHabits.text}>My Habits</Text>
          </View>
          <View style={s.row}>
            <TouchableOpacity style={s.myHabits.addButton}
              onPress={() => navigation.navigate("Create Habit")}
            >
              <Text style={s.myHabits.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={s.column}> 
            <Habits sortBy={(a, b) => 0} />
        </View>
        <View style={s.horizontalLine} />
      <JournalingChoices visible={journalChoicesVisible}
        onClose={closeJournalChoices}
        navigation={navigation}
      />
    </Animated.View>
  );
}