import React, {useState, useRef, useEffect} from 'react';
import {call, debounce, put, takeLatest} from 'redux-saga/effects';
import {goBack} from '../navigation/navigationServices';
import AddUserDataActions, {AddUserDataTypes} from '../redux/addUserdata';
import {getError, showToast} from '../utils/helper';
import firestore from '@react-native-firebase/firestore';
import {Alert, ToastAndroid} from 'react-native';

// demo
// demo 1
// demo firebase in data store
//test firebase
const addUserdataFire = ({payload}) => {
  firestore()
    .collection('Users')
    .add({
      email: payload.email,
      mobileno: payload.mobileno,
      username: payload.username,
    })
    .then(() => {
      ToastAndroid.show(
        'Data Add Successfully',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    })
    .catch(error => {
      Alert.alert(
        'Exception',
        error,
        [
          {
            text: 'Ok',
          },
        ],
        {cancelable: false},
      );
    });
};

const getUserdataFire = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        const threads = [];

        querySnapshot.forEach(documentSnapshot => {
          threads.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });
  console.log('threads', threads);

  return AddUserDataActions.getUserdataSuccess(threads);
};

export default [
  takeLatest(AddUserDataTypes.ADD_USERDATA_REQUEST, addUserdataFire),
  takeLatest(AddUserDataTypes.GET_USERDATA_REQUEST, getUserdataFire),
];
