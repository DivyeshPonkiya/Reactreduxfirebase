import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ToastAndroid, Platform, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import { useNetInfo } from "@react-native-community/netinfo";
import firestore from "@react-native-firebase/firestore";

const AddUser = () => {
    const netInfo = useNetInfo();

    const navigation = useNavigation();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileno, setMobile] = useState('');

    const handleAdduser = (email, mobileno, username) => {
        if (Platform.OS === "android") {
            if (netInfo.isConnected == true) {
                if (email !== "" && mobileno !== "" && username !== "") {
                    firestore()
                        .collection('Users')
                        .add({
                            email: email,
                            mobileno: mobileno,
                            username: username,
                        })
                        .then(() => {
                            navigation.navigate('Userdatalist');
                            ToastAndroid.show("Data Add Successfully", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                        })

                }
                else {
                    Alert.alert('Plese Enter Full Fill Data');
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
                    <Text style={styles.buttonText}>Add user</Text>
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
                    placeholder='Email or Mobile Num'
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
                        handleAdduser(email, mobileno, username)
                    }>
                    <Text style={styles.buttonText}>ADD USER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddUser;
