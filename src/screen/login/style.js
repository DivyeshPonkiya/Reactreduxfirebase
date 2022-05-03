import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.backgroundColor,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    netInfotext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
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

        fontSize: 20,
        alignSelf: 'stretch',
        height: 45,
        paddingRight: 45,
        paddingLeft: 8,
        borderWidth: 1,
        paddingVertical: 0,
        borderColor: 'grey',
        borderRadius: 5,
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
    textBoxContainer: {
        position: 'relative',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    touchableEyeicon: {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 2
    },
    buttonImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    }
});