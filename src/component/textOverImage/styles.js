import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  layout: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 0,
    opacity: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  textTitle: {
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 30,
  },
  text: {
    padding: 5,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 30,
  },
});
