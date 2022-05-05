import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorDarkBlue,
  },
  loginpart: {
    margin: 10,
    borderColor: "red",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});