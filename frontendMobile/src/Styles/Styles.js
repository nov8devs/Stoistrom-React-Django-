// This is where the styling is located (For UI/UX designers)
// P.S. In the future, users will customize their own app design.

const lightModeComponents = {
  mainColor: 'white',
  contentColor: 'black',
  borderColor: 'grey',
  textColor: 'black'
}

const darkModeComponents = {
  mainColor: 'black',
  contentColor: 'grey',
  borderColor: 'white',
  textColor: 'white'
}

const createStyle = (mode) => {
  return {
    container: {
      flex: 1,
      backgroundColor: mode.mainColor,
      alignItems: 'center',
    },
    text: {
      fontSize: 45,
      textAlign: 'center',
      textColor: mode.textColor
    },
    horizontalLine: {
      height: 1,
      backgroundColor: mode.textColor,
    },
    column: {
      flexDirection: 'column',
      flexBasis: '33.33%',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      backgroundColor: mode.mainColor,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 16,
      marginVertical: 10,
    },
    buttonText: {
    },
    backButton: {
    },
    bottomTab: {
    },
    topTab: {
    },
    journalChoices: {
      container: {
      },
      row: {
      },
      cell: {
      },
      journalButton: {
      },
      closeButton: {
      },
    },
    journal: {
      container: {
      },
      emptyPrompt: {
      },
      promptText: {
      },
      entry: {
      },
      submitButton: {
      }
    },
    journalView: {
      container: {
      },
      type: {
      },
    },
    myHabits: {
      tab: {
      },
      text: {
      },
      addButton: {
      },
      buttonText: {
      }
    }  
  }
};

export const mainStyle = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    text: {
      fontSize: 45,
      textAlign: 'center',
    },
    horizontalLine: {
      height: 1,
      backgroundColor: 'black',
    },
    column: {
      flexDirection: 'column',
      flexBasis: '33.33%',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      backgroundColor: 'black',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 16,
      marginVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    backButton: {
      width: 50, 
      height: 50, 
      borderRadius: 25,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomTab: {
      // Bottom Tab Design
    },
    topTab: {
      // Top Tab Design
    },
    journalChoices: {
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      cell: {
        width: 150,
        height: 150,
        margin: 5,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      journalButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 16,
        marginVertical: 20,
      },
      closeButton: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
    journal: {
      container: {
        flex: 1,
        alignItems: 'center',
      },
      emptyPrompt: {
        width: 300,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
      },
      promptText: {
        fontSize: 20,
        textAlign: 'center',
      },
      entry: {
        flex: 1,
        minWidth: '100%',
        height: 450,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
      },
      submitButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginVertical: 10,
      }
    },
    journalView: {
      container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: 'beige'
      },
      type: {
        fontSize: 20,
        textAlign: 'center',
      },
    },
    myHabits: {
      tab: {
        flex: 0.4,
        flexDirection: 'row',
        height: 10,
      },
      text: {
        textAlign: 'left',
        fontSize: 50,
      },
      addButton: {
        backgroundColor: 'black',
        borderColor: '#ccc',
        borderWidth: '1px',
        width: 50, 
        height: 50, 
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'right',
      },
      buttonText: {
        color: 'white',
        fontSize: 45,
        textAlign: 'center',
      }
    }
};
