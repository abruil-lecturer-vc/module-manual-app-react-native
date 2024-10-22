import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    mainPicture: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        paddingTop: 40,
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    },
    BannerImage: { 
        height: 350, 
        alignContent: 'center', 
    }, 
    inputContainer: { 
        flexDirection:'row', 
        justifyContent: 'space-between', 
        alignItems:'center', 
        marginBottom:24, 
        borderBottomWidth:1, 
        borderBottomColor:'#cccccc' 
    }, 
    textInput: { 
        borderWidth:1, 
        borderColor:'#cccccc', 
        width:'70%', 
        margin:8, 
        padding:8, 
    }, 
    appContainer: { 
        flex:1, 
        padding:50, 
        paddingHorizontal:16, 
    }, 
    skillContainer: { 
        marginTop: 20,
    }, 
    skillText: { 
        fontSize: 15, 
        marginVertical: 5, 
        borderBottomColor: '#000000', 
        borderBottomWidth: 0.5, 
    },
    deleteButton: { 
        backgroundColor: '#ff4444', 
        padding: 5, 
        borderRadius: 5, 
    }, 
    deleteButtonText: { 
        color: 'white', 
        fontWeight: 'bold', 
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    RadioContainer: { 
        flex: 0, 
        backgroundColor: '#F5F5F5', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    radioGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginTop: 20, 
        borderRadius: 8, 
        backgroundColor: 'white', 
        padding: 16, 
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { 
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
    }, 
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    },
    ViewImage: { 
        width: 350, 
        height: 350, 
        alignContent: 'center' 
    },
    ImageSize: {
        width: 350,
        height: 350
    },
    HeadingText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 6,

    },
    InputBoxes: {
        paddingBottom: 10,
        paddingStart: 10,
        fontSize: 18,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
    },
    InputFlex: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-evenly'
    },
    red: { 
        color: 'red', 
        fontWeight: 'bold', 
        fontSize: 26, 
        textAlign: 'center' 
    },
    blank: { 
        fontSize: 0, 
    }
});
