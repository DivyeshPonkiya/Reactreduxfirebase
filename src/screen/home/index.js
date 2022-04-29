import React, { useEffect, useState, } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Home = () => {
    const navigation = useNavigation();

    const [message, setMessage] = useState('Hi there, how are you?');
    const [count, setCount] = useState(0);
    const [windowWidthSize, setWindowWidthSize] = useState(0);

    const Increase = () => setCount(prevCount => prevCount + 1);
    const Decrease = () => setCount(prevCount => prevCount - 1);

    useEffect(() => {
        // Update the document title using the browser API
        setTimeout(() => {
            setMessage('Divyesh Ponkiya');
        }, 1000)
        //setWindowWidthSize(Dimensions.get('window').width);
    });

    const size = () => setWindowWidthSize(Dimensions.get('window').width);

    const SignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login');
                ToastAndroid.show("SignOut Successfully", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('The password is invalid');
                }
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('There is no user record corresponding to this identifier');
                }
            })
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginpart}>
                <ScrollView>
                    <TouchableOpacity style={styles.loginButton} onPress={Increase}>
                        <Text>Increase </Text>
                    </TouchableOpacity>
                    <View style={styles.countContainer}>
                        <Text>Count: {count}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={Decrease}
                        disabled={count == 0}>
                        <Text>Decrease </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.loginButton}>
                        <Text>{message} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={() => size()}>
                        <Text>Get window size </Text>
                    </TouchableOpacity>

                    <View style={styles.countContainer}>
                        <Text>The window size {windowWidthSize} pixels</Text>
                    </View>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => navigation.navigate('AddUser')}>
                        <Text>Add user</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => navigation.navigate('AddUserredux')}>
                        <Text>Add User Redux</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => navigation.navigate('Userdatalist')}>
                        <Text>User Data List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => navigation.navigate('Apidata')}>
                        <Text>Api data</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={SignOut}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default Home;