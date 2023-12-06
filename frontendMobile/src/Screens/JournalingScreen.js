import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import endpoints from '../Api/apiEndpoints';
import { mainStyle } from '../Styles/Styles';
import RandomPromptGenerator from '../Utils/Prompts';

const s = StyleSheet.create(mainStyle);

const JournalingScreen = ({ route }) => {
    const { journalType } = route.params;

    const [error, setError] = useState('')

    const [generatedPrompt, setGeneratedPrompt] = useState('');

    const [journalData, setJournalData] = useState({
        name: journalType,
        journal_type: journalType,
    })

    const [pageData, setPageData] = useState({
        journal_id: '',
        prompt: '',
        entry: '',
      });

    const handleChange = (name, value) => {
        setPageData({
          ...pageData,
          [name]: value,
        });
    };

    const handleJournalOk = (responseData) => {
        const journalId = responseData.id;
    
        setPageData({
          ...pageData,
          journal_id: journalId,
        });
    };

    // This will automatically save the journal pages to the journal when one gets created.
    useEffect(() => {
        if (pageData.journal_id) {
          endpoints.handleApiResponse(
            endpoints.journalPage,
            pageData,
            'POST',
            handlePageOk,
            handleError
          );
        }
      }, [pageData.journal_id]);
    
    const handlePageOk = () => {
        setError("Successfully saved journal!");
    }
    const handleError = () => {
        setError("An error has occured while saving your journal!");
    };

    const handleSubmit = () => {
        const journalPost = endpoints.journal;
        endpoints.handleApiResponse(journalPost, journalData, "POST", handleJournalOk, handleError);
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
                <Text>{error}</Text>
                {journalType === "Empty Page" && <TextInput style={s.journal.emptyPrompt}
                    placeholder="Prompt"
                    value={pageData.prompt}
                    onChangeText={(text) => handleChange('prompt', text)} 
                />}
                {journalType !== "Empty Page" && <Text style={s.journal.promptText}>{generatedPrompt}</Text>}
                <TextInput style={s.journal.entry}
                    placeholder="Entry"
                    value={pageData.entry}
                    multiline
                    onChangeText={(text) => handleChange('entry', text)} 
                />
                <TouchableOpacity style={s.journal.submitButton}>
                    <Text style={s.buttonText}>New Page --&gt;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.journal.submitButton}  onPress={handleSubmit}>
                    <Text style={s.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JournalingScreen;