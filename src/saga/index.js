import { all } from 'redux-saga/effects';
import Adduserdata from './Adduserdata';

export default function* rootSaga() {
  yield all([
    ...Adduserdata,
  ]);
}
