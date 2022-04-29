import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    fetchdataBtn:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        margin:5,
    },
    fetchdataText:{
        textAlign:'center',
        fontSize: 18,
        fontWeight:'bold',
    },
    list:{
        backgroundColor:'#2980b6',
        backgroundColor:'rgba(225,225,225,0.2)',
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    lightText:{
        padding:5,
    },
    flatList:{

    },
    textFlatlist:{

    },
});