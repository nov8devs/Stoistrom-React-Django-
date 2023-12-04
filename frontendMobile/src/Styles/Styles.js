// This is where the styling is located (For UI/UX designers)
// P.S. In the future, users will customize their own app design. That's why this file is designed this way.

const lightModeStyle = {}
const darkModeStyle = {}

export const mainStyle = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 45,
        textAlign: 'center',
    },
    button: {
      backgroundColor: 'black',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 16,
      marginVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    journal: {},
    prompt: {
      width: 300, 
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 12,
      padding: 8,
    },
    entry: {
      width: 300, 
      height: 450,
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 12,
      padding: 8,
    },
    backButton: {
      width: 50, 
      height: 50, 
      borderRadius: 25,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }
}
