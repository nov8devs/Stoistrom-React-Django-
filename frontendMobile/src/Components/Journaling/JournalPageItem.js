import { View, Text, StyleSheet } from 'react-native';
import { mainStyle } from '../../Styles/Styles';

const s = StyleSheet.create(mainStyle);

const JournalPageItem = ({ page }) => {

    return (
        <View key={page.id} style={{ textAlign: 'center' }}>
            <Text style={s.text}>{page.prompt}</Text>
            <View style={s.horizontalLine} />
            <Text>{page.entry}</Text>
        </View>
    )
};

export default JournalPageItem;