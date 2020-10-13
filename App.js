import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Slider from './src/primary-carousel/slider/Slider';

const {width, height} = Dimensions.get('window');
const dataSource = [
  {
    title: 'Title 1',
    caption: 'Subtitle 1',
    imgUrl: 'http://placeimg.com/640/480/any',
    titleOverImg: 'text',
    textListOverImg: ['text1', 'text2'],
  },
  {
    title: 'Title 2',
    caption: 'Subtitle 2',
    imgUrl: 'http://placeimg.com/640/480/any',
    titleOverImg: 'text',
  },
  {
    title: 'Title 3',
    caption: 'Subtitle 3',
    imgUrl: 'http://placeimg.com/640/480/any',
  },
  {
    title: 'Title 4',
    caption: 'Subtitle 4',
    imgUrl: 'http://placeimg.com/640/480/any',
  },
  {
    title: 'Title 5',
    imgUrl: 'http://placeimg.com/640/480/any',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Slider
        dataSource={dataSource}
        imgWidth={width * 0.8}
        imgHeight={height * 0.8}
        clickable={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
