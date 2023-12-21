import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import dateTimeFormat from '../../Utils/DateTimeFormat'
import { mainStyle } from '../../Styles/Styles';

const s = StyleSheet.create(mainStyle)

const JournalItem = ({ journal, navigation }) => {

    return (
        <TouchableOpacity
        key={journal.id}
        style={s.journalView.container}
        onPress={() => navigation.navigate("My Journal", { id: journal.id })}
        >
        <Text style={s.journalView.type}>{journal.name}</Text>
        <View style={s.horizontalLine} />
        <Text>{journal.journal_type}</Text>
        <Text>{dateTimeFormat(journal.date_started)}</Text>
        </TouchableOpacity>
    )
};

export default JournalItem;