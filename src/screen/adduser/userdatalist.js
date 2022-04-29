import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ToastAndroid, Platform, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import { useNetInfo } from "@react-native-community/netinfo";
import firestore from "@react-native-firebase/firestore";
import Separator from './Separator';

const Userdatalist = () => {

    const [threads, setThreads] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                const threads = [];

                querySnapshot.forEach(documentSnapshot => {
                   
                    threads.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });

                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });

                setThreads(threads)
                console.log("threads", threads)

                if (loading) {
                    setLoading(false)
                }
            })
    }, [])

    if (loading) {
        return <ActivityIndicator size='large' color='#555' />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={threads}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert('Open a message thread')}>
                        <View style={styles.row}>
                            <View style={styles.content}>
                                <View style={styles.header}>
                                    <Text style={styles.nameText}>{item.username}</Text>
                                </View>
                                <View style={styles.header}>
                                    <Text style={styles.nameText}>{item.email}</Text>
                                </View>
                                <Text style={styles.contentText}>
                                    {item.mobileno}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </View>
    )
}

export default Userdatalist;
