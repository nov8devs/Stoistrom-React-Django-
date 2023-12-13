import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { mainStyle } from '../Styles/Styles';

const s = StyleSheet.create(mainStyle);

const Warning = ({ visible, onClose, warning, onAction }) => {
    return (
        <Modal
            animationType="slide" 
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={s.journalChoices.container}>
                <Text style={s.text}>{warning}</Text>
                <TouchableOpacity onPress={onAction} style={s.button}>
                    <Text style={s.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} style={s.button}>
                    <Text style={s.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default Warning;