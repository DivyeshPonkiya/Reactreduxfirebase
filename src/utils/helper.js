import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import NavigationRoutes from '../navigation/NavigationRoutes';
import { reset } from '../navigation/navigationServices';
import ErrorConsts from '../firebaseService/util/ErrorConsts';
import { Toast } from 'native-base';
import { Alert } from 'react-native';


export const navigateBack = props => {
  props.navigation.goBack();
};

export const isValidEmail = email => {
  // eslint-disable-next-line no-useless-escape
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return reg.test(email);
};

export const logout = () => {
  AsyncStorage.clear();
  // props.dispatch(setToken(""));
  reset(NavigationRoutes.Login);
};

export function checkNetwork() {
  NetInfo.fetch().then(state => {
    if (state.isConnected) {
      return true;
    } else {
      Alert.alert('Internet loss! Please connect internet try again');
      return false;
    }
  });
}

export function isNull(data) {
  if (data === '' || data === 'null' || data === null || data === undefined) {
    return true;
  } else {
    false;
  }
}

export const showToast = message => {
  Toast.show({
    title: `${message}`,
    duration: 2000,
  });
};

export function objToQueryString(obj) {
  const keyValuePairs = [];

  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }

  return keyValuePairs.join('&');
}

export const jsonParser = data => {
  let parseData = data;

  try {
    parseData = JSON.parse(data);
  } catch (e) {
    () => { };
  }

  return parseData;
};

export async function getError(response) {
  if (response?.problem === 'CLIENT_ERROR') {
    return handleClientError(response);
  }
  if (response?.problem === 'NETWORK_ERROR') {
    return ErrorConsts.networkError;
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return ErrorConsts.serverError;
  }

  return ErrorConsts.somethingWentWrong;
}

export const base64URLEncode = str => {
  return str
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/[=]/g, '');
};

export const sha256 = buffer => {
  return crypto
    .createHash('sha256')
    .update(buffer)
    .digest();
};

const handleClientError = response => {
  if (response.status === 401) {
    logout();
  }

  return response.data?.message || ErrorConsts.somethingWentWrong;
};

export function generateGradient(color, alpha) {
  const generatedColor = Color(color)
    .alpha(alpha)
    .rgb()
    .string();

  return generatedColor;
}

export function convertDateToSpecificFormat(date, format) {
  let finalDate = date;

  finalDate = moment.utc(date).format(format);

  return finalDate;
}
