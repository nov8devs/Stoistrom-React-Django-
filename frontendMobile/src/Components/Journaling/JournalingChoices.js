import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { mainStyle } from '../../Styles/Styles';

const s = StyleSheet.create(mainStyle)

const JournalingChoices = ({visible, onClose, navigation}) => {
    emptyPage = {journalType: "Empty Page"};
    randomPrompt = {journalType: "Random Prompt"};

    return (
        <Modal
            animationType="slide" 
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={s.journalChoices.container}>
                <TouchableOpacity onPress={onClose} style={s.journalChoices.closeButton}>
                    <Text style={s.buttonText}>\/</Text>
                </TouchableOpacity>
                <View style={s.journalChoices.row}>
                    <View style={s.journalChoices.cell}>
                        <TouchableOpacity style={s.journalChoices.journalButton} onPress={() => {navigation.navigate("Journaling", emptyPage), onClose()}}>
                            <Text style={s.buttonText}>Empty Page</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={s.journalChoices.cell}>
                        <TouchableOpacity style={s.journalChoices.journalButton} onPress={() => {navigation.navigate("Journaling", randomPrompt), onClose()}}>
                            <Text style={s.buttonText}>Random Prompt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default JournalingChoices;