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
    alignItems: 'center',
  },
  containerButton: {
    alignItems: 'center'
  }
 
})

export default styles;