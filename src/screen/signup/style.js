import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.backgroundColor,
        backgroundColor: '#2c3e50',
    },
    formContainer:{
        margin:10,
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
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
    allredyexistliginText:{
        alignContent:"center",
        justifyContent:'center',
        flexDirection:'row',
        margin:10,
    },
    allredyexistText:{
        fontSize: 18,
        marginRight:5,
    },
    loginText:{
        color: '#2980b6',
        fontSize: 18,
    },
});