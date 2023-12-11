import { View, Text, TextInput, StyleSheet } from 'react-native';
import { mainStyle } from '../Styles/Styles';

const s = StyleSheet.create(mainStyle);

const JournalPage = ({type, pageData, setPageData, prompt}) => {
    const handleChange = (name, value) => {
        setPageData({
          ...pageData,
          [name]: value,
        });
    };

    return (
        <View style={s.container}>
            {type === "Empty Page" && <TextInput style={s.journal.emptyPrompt}
                placeholder="Prompt"
                value={pageData.prompt}
                onChangeText={(text) => handleChange('prompt', text)} 
            />}
            {type !== "Empty Page" && <Text style={s.journal.promptText}>{prompt}</Text>}
            <TextInput style={s.journal.entry}
                placeholder="Entry"
                value={pageData.entry}
                multiline
                onChangeText={(text) => handleChange('entry', text)} 
            />
        </View>
    );
};

export default JournalPage;