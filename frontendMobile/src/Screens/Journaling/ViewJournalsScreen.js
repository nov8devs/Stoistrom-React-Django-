import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import endpoints from '../../Api/apiEndpoints';
import { mainStyle } from '../../Styles/Styles';
import dateTimeFormat from '../../Utils/DateTimeFormat';

const s = StyleSheet.create(mainStyle);

const ViewJournalsScreen = ({ navigation }) => {

    const [journals, setJournals] = useState([]);

    useFocusEffect(useCallback(() => {endpoints.getAPIResponse(endpoints.getJournal, setJournals)}, []));

    // Types of arrangements are put here. Journals are defaultly sorted by Oldest.
    const [sortSelect, setSortSelect] = useState('newest');
    const sortingOptions = {
        newest: (a, b) => new Date(b.date_started) - new Date(a.date_started),
        oldest: (a, b) => 0,
    };
    const chooseSort = (sortBy) => {
        if (sortBy === 'newest') {
            setSortSelect('newest');
        } else {
            setSortSelect('oldest');
        }
    };

    const sortedJournals = journals.slice().sort(sortingOptions[sortSelect]);

    return (
        <View style={s.container}>
            <View id='sortByTab'>
                <Text>--Sort By Tab--</Text>
                <View style={s.row}>
                    {Object.keys(sortingOptions).map((option) => (
                        <View style={s.column} key={option}>
                            <Button style={s.button} key={option}
                            onPress={() => chooseSort(option)} 
                            title={option.charAt(0).toUpperCase() + option.slice(1)} />
                        </View>
                    ))}
                </View>
            </View>
            <ScrollView>
                {sortedJournals.map((journal) => (
                    <TouchableOpacity 
                    key={journal.id} 
                    style={s.journalView.container}
                    onPress={() => navigation.navigate("My Journal", {id: journal.id})}>
                        <Text style={s.journalView.type}>{journal.name}</Text>
                        <View style={s.horizontalLine} />
                        <Text>{journal.journal_type}</Text>
                        <Text>{dateTimeFormat(journal.date_started)}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default ViewJournalsScreen;