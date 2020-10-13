import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  indicatorContainer: {
    ...Platform.select({
      ios: {
        bottom: 30,
      },
      android: {
        bottom: -20,
      },
    }),
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
