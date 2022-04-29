import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.backgroundColor,
        backgroundColor: '#2c3e50',
    },

    netInfotext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    formContainer: {
        margin: 10,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        marginTop: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    forNewusersignupText: {
        alignContent: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    forNewuserText: {
        fontSize: 18,
        marginRight: 5,
    },
    signupText: {
        color: '#2980b6',
        fontSize: 18,
    },
    list: {
        backgroundColor: '#2980b6',
        backgroundColor: 'rgba(225,225,225,0.2)',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lightText: {
        padding: 5,
    },


    title: {
        marginTop: 20,
        marginBottom: 30,
        fontSize: 28,
        fontWeight: '500'
    },
    row: {
        paddingRight: 10,
        paddingLeft: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flexShrink: 1
    },
    header: {
        flexDirection: 'row'
    },
    nameText: {
        fontWeight: '600',
        fontSize: 18,
        color: '#000'
    },
    dateText: {},
    contentText: {
        color: '#949494',
        fontSize: 16,
        marginTop: 2
    }
});