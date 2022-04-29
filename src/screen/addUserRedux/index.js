import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ToastAndroid, Platform, FlatList } from 'react-native';
import styles from './style';
import { useNetInfo } from "@react-native-community/netinfo";
import { checkNetwork, isNull, showToast } from '../../utils/helper';
import { useDispatch } from 'react-redux';
import AddUserdataActions from '../../redux/addUserdata';


const checkValidation = values => {
    if (isNull(values.username)) {
        ToastAndroid.show("Plese Enter Usename", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        return false;
    } else if (isNull(values.email)) {
        ToastAndroid.show("Plese Enter Email", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        return false;
    } else if (isNull(values.mobileno)) {
        ToastAndroid.show("Plese Enter Mobile No", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        return false;
    }
    else {
        return true;
    }
}

const callforAdddata = (values, dispatch) => {
    const data = {
        email: values.email,
        mobileno: values.mobileno,
        username: values.username,
    }
    dispatch(AddUserdataActions.addUserdataRequest(data));
}

const AddUserredux = (props) => {

    const netInfo = useNetInfo();

    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileno, setMobile] = useState('');

    const handleAdduser = (values, dispatch) => {
        if (Platform.OS === "android") {
            if (netInfo.isConnected == true) {
                if (checkValidation(values)) {
                    callforAdddata(values, dispatch);
                    props.navigation.navigate('Userdatalist');
                    setUserName('');
                    setEmail('');
                    setMobile('');
                }
            }
            else {
                Alert.alert('Internet loss! Please connect internet try again');
            }
        }
    }

    //-- for use next button focuse by enter button --//
    const ref_input1 = useRef();
    const ref_input2 = useRef();

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add user redux</Text>
                </View>

                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    placeholder='User Name'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={setUserName}
                    onSubmitEditing={() => ref_input1.current.focus()}
                    value={username} />

                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="go"
                    placeholder='Email'
                    ref={ref_input1}
                    onSubmitEditing={() => ref_input2.current.focus()}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={setEmail}
                    value={email} />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    placeholder='Mobile No'
                    keyboardType='numeric'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={setMobile}
                    ref={ref_input2}
                    value={mobileno} />

                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() =>
                        handleAdduser({ email, mobileno, username }, dispatch)
                    }>
                    <Text style={styles.buttonText}>ADD USER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddUserredux;
