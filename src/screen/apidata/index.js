import React, { useEffect, useState } from "react";
import styles from "./style";
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import style from "./style";
import { firebase } from "@react-native-firebase/auth";

const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading } = props;
    const [userName, setuserName] = useState('');

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User email: ', user.email);
            setuserName(user.email)
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.fetchdataBtn}><Text style={style.fetchdataText}>Username:{userName}  </Text></View>
            <TouchableOpacity style={styles.fetchdataBtn} onPress={goForFetch}>
                <Text style={style.fetchdataText}>Click using Fetch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fetchdataBtn} onPress={goForAxios}>
                <Text style={style.fetchdataText}>Click using axios</Text>
            </TouchableOpacity>

            {fromFetch ?
                <FlatList data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                /> : <FlatList
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            }
            {
                loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    {/* <Text>Fetching Data</Text> */}
                </View>
            }
        </View>
    );
};

export default ApiView;