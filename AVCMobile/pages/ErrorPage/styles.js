import {
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerLogo: {
    alignItems: 'center'
  },
  logo: {
    marginTop: -150,
    width: 368,
    height: 298,
  },
  
  button: {
    margin: 15,
    width: 320,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#24464F',
    borderRadius: 10,
  },
  textCode: {
    fontSize: 190,
    fontFamily: 'Roboto-Bold',
  },
  textError: {
    fontSize: 50,
    fontFamily: 'Roboto-ThinItalic',
    textAlign: 'center'
  },
  textSorry: {
    fontSize: 14,
    fontFamily: 'Roboto-Thin',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#fff'
  }
  
})

export default styles;