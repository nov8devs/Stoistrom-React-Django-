import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import endpoints from '../Api/apiEndpoints';
import { mainStyle } from '../Styles/Styles';

const s = StyleSheet.create(mainStyle)

const JournalingScreen = ({ navigateTo }) => {
    const navHome = () => {
        navigateTo('Home');
    };

    const [formData, setFormData] = useState({
        journal_id: '',
        prompt: '',
        entry: '',
      });

    const handleChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    // endpoints.handleApiResponse()

    return (
        <View style={s.container}>
            <TextInput style={s.prompt}
                placeholder="Prompt"
                value={formData.prompt}
                onChangeText={(text) => handleChange('prompt', text)} 
            />
            <TextInput style={s.entry}
                placeholder="Entry"
                value={formData.entry}
                multiline
                onChangeText={(text) => handleChange('entry', text)} 
            />
            <TouchableOpacity style={s.backButton} onPress={navHome}>
                <Text style={s.buttonText}>&lt;</Text>
            </TouchableOpacity>
        </View>
    );
}

export default JournalingScreen;