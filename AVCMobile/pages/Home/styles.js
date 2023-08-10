import {
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  gradientContainer: {
    backgroundColor: '#24464F'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  logo: {
    top: '55%',
    width: 281,
    height: 169,
  },

})

export default styles;