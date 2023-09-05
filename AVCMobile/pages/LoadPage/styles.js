import {
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  gradientContainer: {
    backgroundColor: '#24464F'
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 20,
  },
  containerLogo: {
    alignItems: 'center'
  },
  logo: {
    width: 281,
    height: 169,
  },
  text: {
    fontSize: 25,
    fontFamily: 'Roboto-Medium',
    color: 'white',
    marginHorizontal: 5,
  },
  containerText: {
    flexDirection: "row",
  },
  dots: {
    fontSize: 25,
    fontFamily: 'Roboto-Medium',
    color: 'white',
    marginHorizontal: 7
  }
 
})

export default styles;