import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  titleContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
    paddingVertical: 15,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  caption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionText: {
    paddingVertical: 10,
    fontSize: 16,
  },
});
