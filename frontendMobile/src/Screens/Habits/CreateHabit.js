import React, { useState } from 'react';
import { View, ScrollView, Button, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { mainStyle } from '../../Styles/Styles';
import endpoints from '../../Api/apiEndpoints';

const s = StyleSheet.create(mainStyle);

const CreateHabit = ({navigation}) => {
    const [error, setError] = useState('')
    const [goodHabit, setGoodHabit] = useState(false)

    const [habitData, setHabitData] = useState({
        name: '',
        description: '',
        good_habit: true,
    });

    const handleChange = (name, value) => {
        setHabitData({
            ...habitData,
            [name]: value
        });
    };

    const handlingPost = {
        handleOk: () => {
            setError("Successfully saved habit!");
            navigation.navigate("Home", error);
        },
        handleError: () => {
            setError("An error has occured while saving your habit!");
        },
    }
    const handleSubmit = () => {
        const habit = endpoints.getHabit;
        endpoints.postApiResponse(habit, habitData, handlingPost.handleOk, handlingPost.handleError)
    }

    return (
        <ScrollView>
            <View style={s.container}>
                <Text>{error}</Text>
                <TextInput
                    placeholder="Name"
                    value={habitData.prompt}
                    onChangeText={(text) => handleChange('name', text)} 
                />
                <TextInput
                    placeholder="Description"
                    value={habitData.entry}
                    multiline
                    onChangeText={(text) => handleChange('description', text)} 
                />
                <Button 
                    title={goodHabit ? 'Good' : 'Bad'}
                    onPress={() => setGoodHabit(!goodHabit)}
                />
                <TouchableOpacity style={s.journal.submitButton} onPress={handleSubmit}>
                    <Text style={s.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CreateHabit;