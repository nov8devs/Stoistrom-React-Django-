import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import endpoints from '../../Api/apiEndpoints';
import { mainStyle } from '../../Styles/Styles';
import countWords from '../../Utils/WordCounter';

const s = StyleSheet.create(mainStyle);

const SaveJournalingScreen = ({ navigation, route }) => {
    const {journalData: initialJournalData, pageData: initialPageData} = route.params;

    const [journalData, setJournalData] = useState(initialJournalData)
    const [pageData, setPageData] = useState(initialPageData)

    const [error, setError] = useState('');

    const wordCount = countWords(pageData.entry);

    const handleChange = (value) => {
        setJournalData({
          ...journalData,
          name: value,
        });
    };

    const handlingPost = {
        handleJournalOk: (responseData) => {
            const journalId = responseData.id;
        
            setPageData({
              ...pageData,
              journal_id: journalId,
            });
        },
        handlePageOk: () => {
            setError("Successfully saved journal!");
            navigation.navigate("Home", error);
        },
        handleError: () => {
            setError("An error has occured while saving your journal!");
        },
    }
    const handleSubmit = () => {
        const journalPost = endpoints.journal;
        endpoints.postApiResponse(journalPost, journalData, handlingPost.handleJournalOk, handlingPost.handleError);
    };
    // This will automatically save the journal pages to the journal the moment one gets created.
    useEffect(() => {
        if (pageData.journal_id) {
            page = endpoints.journalPage;
            endpoints.postApiResponse(page, pageData, handlingPost.handlePageOk, handlingPost.handleError);
        }
    }, [pageData.journal_id]);

    return (
        <View style={s.container}>
            <Text>{error}</Text>
            <Text style={s.text}>Completed Journal</Text>
            <Text>Words written: {wordCount}</Text>
            <TextInput 
                style={s.journal.emptyPrompt}
                placeholder={journalData.name}
                value={journalData.name}
                onChangeText={(text) => handleChange(text)} 
            />
            <TouchableOpacity style={s.journal.submitButton} onPress={handleSubmit}>
                <Text style={s.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SaveJournalingScreen;