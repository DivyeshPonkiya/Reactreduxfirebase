import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ToastAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import { useNetInfo } from "@react-native-community/netinfo";

const Login = () => {

    const netInfo = useNetInfo();

    const navigation = useNavigation();

    const [uName, setName] = useState('divyesh@gmail.com');
    const [uPass, setPass] = useState('123456');

    const handleLogin = (uName, uPass) => {
        if (Platform.OS === "android") {
            if (netInfo.isConnected == true) {
                if (uName !== "" && uPass !== "") {
                    auth()
                        .signInWithEmailAndPassword(uName, uPass)
                        .then(() => {
                            navigation.navigate('Home');
                            ToastAndroid.show("Login Successfully", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                            setName("");
                            setPass("");
                        })
                        .catch(error => {
                            if (error.code === 'auth/wrong-password') {
                                Alert.alert('The password is invalid');
                            }
                            if (error.code === 'auth/user-not-found') {
                                Alert.alert('There is no user record corresponding to this identifier');
                            }
                        })
                }
                else {
                    Alert.alert('Plese Enter Username And Password');
                }
            }
            else {
                Alert.alert('Internet loss! Please connect internet try again');
            }
        }
    };

    const handleSignupPage = () => {
        navigation.navigate('Signup')
        setName("");
        setPass("");
    }

    //-- for use next button focuse by enter button --//
    const ref_input2 = useRef();

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
                    returnKeyType="go"
                    placeholder='Email or Mobile Num'
                    onSubmitEditing={() => ref_input2.current.focus()}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={setName}
                    value={uName} />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                    onChangeText={setPass}
                    ref={ref_input2}
                    value={uPass} />

                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() =>
                        handleLogin(uName, uPass)
                    }>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <View style={styles.forNewusersignupText}>
                    <Text style={styles.forNewuserText}>For New user</Text>
                    <TouchableOpacity
                        onPress={() => handleSignupPage()}>
                        <Text style={styles.signupText}>Signup</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default Login;
