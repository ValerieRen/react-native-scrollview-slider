import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  indicatorContainer: {
    bottom: -20,
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  indicator: {
    margin: 3,
    opacity: 0.9,
  },
  indicatorSelected: {
    opacity: 1,
  },
});
