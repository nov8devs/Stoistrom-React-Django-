import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { mainStyle } from '../Styles/Styles';
import { useFocusEffect } from '@react-navigation/native'
import dateTimeFormat from '../Utils/DateTimeFormat';
import endpoints from '../Api/apiEndpoints';

const s = StyleSheet.create(mainStyle);

const Habits = ({sortBy, navigation}) => {
    const getHabits = endpoints.getHabit;

    const [habits, setHabits] = useState([]);
    useFocusEffect(useCallback(() => {endpoints.getAPIResponse(getHabits, setHabits)}, []));

    const sortedHabits = habits.slice().sort(sortBy);

    const controlStreak = (goodHabit) => {
        if (goodHabit) {
            console.log("Habit is good!");
        } else {
            console.log("Habit is bad!");
        }
    }

    return (
        <ScrollView>
        {sortedHabits.map((habit) => (
            <View 
                key={habit.id} 
                style={s.journalView.container}
            >
                <Text style={s.journalView.type}>{habit.name}</Text>
                <View style={s.horizontalLine} />
                <Text>{habit.description}</Text>
                <Text>Streak: (coming soon)</Text>
                <Button 
                    style={ habit.good_habit ? s.journal.button : s.buttonText } 
                    title={ habit.good_habit ? 'Complete' : 'Relapse' }
                    onPress={() => controlStreak(habit.good_habit)}
                />
            </View>
        ))}
        </ScrollView>
    )
}

export default Habits;