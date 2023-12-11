import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import endpoints from '../../Api/apiEndpoints';
import { mainStyle } from '../../Styles/Styles';
import Warning from '../../Components/Warning';

const s = StyleSheet.create(mainStyle);

const ViewPagesScreen = ({navigation, route }) => {
    const { id } = route.params;

    const [journalPages, setJournalPages] = useState([]);
    useEffect(() => {endpoints.getAPIResponse(endpoints.getJournalPage, setJournalPages)}, []);

    const filteredPages = journalPages.filter(page => page.journal === id);

    // For Editing Journal
    const editJournal = (id) => {}

    // For Deleting Journal
    const warning = "Are you sure you want to delete this journal?";
    const [warningVisible, setWarningVisible] = useState(false);
    const toggleWarning = () => {
        setWarningVisible(!warningVisible);
    }

    const deleteJournal = (id) => {
        endpoints.deleteApiResponse(endpoints.deleteJournal, id);
        navigation.navigate("View Journals");
    }

    return (
        <View style={s.container}>
            <View id='Settings' style={s.row}>
                <Button title="Edit"/>
                <Button title="Delete" onPress={toggleWarning}/>
            </View>
            {filteredPages.map((page) => (
                <View key={page.id} style={{textAlign: 'center'}}>
                    <Text style={s.text}>{page.prompt}</Text>
                    <View style={s.horizontalLine} />
                    <Text>{page.entry}</Text>
                </View>
            ))}
            <Warning
                visible={warningVisible}
                warning={warning}
                onClose={toggleWarning}
                onAction={() => deleteJournal(id)}
            />
        </View>
    );
};

export default ViewPagesScreen;