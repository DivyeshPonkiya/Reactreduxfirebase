import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { goBack } from '../navigation/navigationServices';
import AddUserDataActions, { AddUserDataTypes } from '../redux/addUserdata';
import { getError, showToast } from '../utils/helper';
import firestore from "@react-native-firebase/firestore";
import { Alert, ToastAndroid } from 'react-native';

<<<<<<< HEAD
// demo
// demo 1
=======
// demo firebase in data store
//test firebase
>>>>>>> fixhot
const addUserdataFire = ({ payload }) => {
  firestore()
    .collection('Users')
    .add({
      email: payload.email,
      mobileno: payload.mobileno,
      username: payload.username,
    })
    .then(() => {
      ToastAndroid.show("Data Add Successfully", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    })
    .catch((error) => {
      Alert.alert(
        'Exception',
        error,
        [
          {
            text: 'Ok',
          },
        ],
        { cancelable: false },
      )
    })
}

function* addUserdata(api, { payload }) {
  // console.log("payload", payload)

  const response = yield call(api.createNewProduct, payload);

  if (response?.status === 200 || response?.status === 201) {
    yield put(AddUserDataActions.addProductSuccess());
    showToast(response?.data?.message);

    goBack();
  } else {
    const error = yield call(getError, response);

    showToast(error);
    yield put(AddUserDataActions.addProductFailure(error));
  }
}

export default [
  takeLatest(AddUserDataTypes.ADD_USERDATA_REQUEST, addUserdataFire),
];
