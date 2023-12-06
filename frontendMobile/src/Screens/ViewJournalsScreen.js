import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import endpoints from '../Api/apiEndpoints';
import { mainStyle } from '../Styles/Styles';

const s = StyleSheet.create(mainStyle);

const ViewJournalsScreen = () => {
    const [journals, setJournals] = useState([]);

    useEffect(() => {endpoints.getAPIResponse(endpoints.getJournal, setJournals)}, [])

    return (
        <View style={s.container}>
            {journals.map((journal) => (
                <View key={journal.id}>
                    <Text style={s.text}>{journal.name}</Text>
                    <Text>{journal.journal_type}</Text>
                </View>
            ))}
        </View>
    );
};

export default ViewJournalsScreen;