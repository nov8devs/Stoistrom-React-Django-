import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import endpoints from '../../Api/apiEndpoints';
import { mainStyle } from '../../Styles/Styles';
import JournalItem from '../../Components/Journaling/JournalItem';

const s = StyleSheet.create(mainStyle);
  
  const SortingButton = ({ option, chooseSort }) => (
    <View style={s.column}>
      <Button
        style={s.button}
        onPress={() => chooseSort(option)}
        title={option.charAt(0).toUpperCase() + option.slice(1)}
      />
    </View>
  );

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
                        <SortingButton key={option} option={option} chooseSort={chooseSort} />
                    ))}
                </View>
            </View>
            <ScrollView>
                {sortedJournals.map((journal) => (
                    <JournalItem key={journal.id} journal={journal} navigation={navigation} />
                ))}
            </ScrollView>
        </View>
    );
};

export default ViewJournalsScreen;