import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import { useNetInfo } from "@react-native-community/netinfo";

const Signup = () => {
    const netInfo = useNetInfo();

    const navigation = useNavigation();

    const [uName, setName] = useState('');
    const [uPass, setPass] = useState('');
    const [uRPass, setRPass] = useState('');

    const handleSignup = (uName, uPass, uRPass) => {
        if (Platform.OS === "android") {
            if (netInfo.isConnected == true) {
                if (uName !== "" && uPass !== "" && uRPass !== "") {
                    if (uPass !== uRPass) {
                        Alert.alert('password did not match');
                    }
                    else {
                        auth()
                            .createUserWithEmailAndPassword(uName, uPass)
                            .then(() => {
                                navigation.navigate('Home');
                                ToastAndroid.show("Signup Successfully", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                                setName("");
                                setPass("");
                                setRPass("");

                            })
                            .catch(error => {
                                if (error.code === 'auth/email-already-in-use') {
                                    Alert.alert('That email address is already in use!');
                                }
                                if (error.code === 'auth/invalid-email') {
                                    Alert.alert('That email address is invalid!');
                                }
                            })
                    }
                }
                else {
                    Alert.alert('Plese Enter data');
                }
            }
            else {
                Alert.alert('Internet loss! Please connect internet try again');
            }
        }
    };


    //-- for use next button focuse by enter button --//
    const ref_input2 = useRef();
    const ref_input3 = useRef();

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain"
                    style={styles.logo}
                    source={require('../../../src/assests/images/logo.jpg')} />
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num'
                    onSubmitEditing={() => ref_input2.current.focus()}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={setName}
                    autoFocus={false}
                    value={uName} 
                    />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    placeholder='Password'
                    onSubmitEditing={() => ref_input3.current.focus()}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                    ref={ref_input2}
                    onChangeText={setPass}
                    value={uPass} />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                    ref={ref_input3}
                    onChangeText={setRPass}
                    value={uRPass} />

                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() =>
                        handleSignup(uName, uPass, uRPass)
                    }>
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>

                <View style={styles.allredyexistliginText}>
                    <Text style={styles.allredyexistText}>Allredy user exist</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
};

export default Signup;
