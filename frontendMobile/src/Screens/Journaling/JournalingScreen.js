import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { mainStyle } from '../../Styles/Styles';
import RandomPromptGenerator from '../../Utils/Prompts';
import JournalPage from '../../Components/JournalPage';

const s = StyleSheet.create(mainStyle);

const JournalingScreen = ({ navigation, route }) => {
    const { journalType } = route.params;

    const [generatedPrompt, setGeneratedPrompt] = useState('');

    // User data that will be sent to the backend.
    const [journalData, setJournalData] = useState({
        name: journalType,
        journal_type: journalType,
    });
    const [pageData, setPageData] = useState({
        journal_id: '',
        prompt: '',
        entry: '',
    });

    const goToSubmit = () => {
        const saveParams = {
            journalData: journalData,
            pageData: pageData,
        };
        navigation.navigate("Save Journal", saveParams);
    };

    if (journalType === "Random Prompt") {
        useEffect(() => {setGeneratedPrompt(RandomPromptGenerator())}, []);
        useEffect(() => {
            setPageData({
                ...pageData,
                prompt: generatedPrompt,
            })
        }, [generatedPrompt]);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={s.container}>
                <JournalPage
                    type={journalType}
                    prompt={generatedPrompt}
                    pageData={pageData}
                    setPageData={setPageData}
                />
                <TouchableOpacity style={s.journal.submitButton}>
                    <Text style={s.buttonText}>New Page --&gt;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.journal.submitButton} onPress={goToSubmit}>
                    <Text style={s.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JournalingScreen;