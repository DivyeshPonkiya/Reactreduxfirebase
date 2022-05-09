import React, { useEffect, useState, } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ToastAndroid, ScrollView, RefreshControl, Pressable, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import ModalHome from '../../component/modal';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = () => {
    const navigation = useNavigation();

    const [message, setMessage] = useState('Hi there, how are you?');
    const [count, setCount] = useState(0);
    const [windowWidthSize, setWindowWidthSize] = useState(0);

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setCount(0);
        setMessage('Hi there, how are you?');
        wait(2000).then(() => setRefreshing(false));
    }, []);

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
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh} />
                    }>
                    <Pressable style={styles.loginButton} onPress={Increase}>
                        <Text>Increase </Text>
                    </Pressable>
                    <View style={styles.countContainer}>
                        <Text>Count: {count}</Text>
                    </View>

                    <Pressable
                        style={styles.loginButton}
                        onPress={Decrease}
                        disabled={count == 0}>
                        <Text>Decrease </Text>
                    </Pressable>


                    <TouchableOpacity style={styles.loginButton}>
                        <Text>{message} </Text>
                    </TouchableOpacity>

                    <TouchableHighlight style={styles.loginButton} onPress={() => size()}>
                        <Text>Get window size </Text>
                    </TouchableHighlight>

                    <View style={styles.countContainer}>
                        <Text>The window size {windowWidthSize} pixels</Text>
                    </View>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => navigation.navigate('Apidata')}>
                        <Text>Api data</Text>
                    </TouchableOpacity>

                    <ModalHome />

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