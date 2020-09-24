## Overview

This is slider using `ScrollView` in React Native. 

## Example

See example in App.js
```bash
const {width, height} = Dimensions.get('window');
const dataSource = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    imgUrl: 'http://placeimg.com/640/480/any',
    titleOverImg: 'text',
    textListOverImg: ['text1', 'text2'],
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    imgUrl: 'http://placeimg.com/640/480/any',
    titleOverImg: 'text',
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    imgUrl: 'http://placeimg.com/640/480/any',
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    imgUrl: 'http://placeimg.com/640/480/any',
  },
  {
    title: 'Title 5',
    imgUrl: 'http://placeimg.com/640/480/any',
  },
];

const App = () => {
  return (
    <View>
      <Slider
        dataSource={dataSource}
        imgWidth={width * 0.8}
        imgHeight={height * 0.8}
      />
    </View>
  );
};
```

## Props

| Property | Type | isRequired? | Default | Description |
| --- | :---: | :---: | :---: | --- |
| `dataSource` | array | required | - | slideshow data |
| `imgWidth` | number | optional | screenWidth * 0.7 | image width |
| `imgHeight` | number | optional | screenHeight * 0.6 | image height |
| `indicatorColor` | string | optional | gray | set indicator color  |
| `selectedIndicatorColor` | string | optional | blue | set selected indicator color |
| `indicatorContainerStyle` | object | optional | - | indicator container style |
| `indicatorStyle` | object | optional | - | unselected indicator style |
| `indicatorSelectedStyle` | object | optional | - | selected indicator style |
| `textOverImageContainerStyle` | object | optional | - | textOverImageContainerStyle |
| `textOverImageTitleStyle` | object | optional | - | textOverImageTitleStyle |
| `textOverImageTextStyle` | object | optional | - | textOverImageTextStyle |
| `titleTextStyle` | object | optional | - | title text style |
| `titleContainerStyle` | object | optional | - | title container style |
| `captionTextStyle` | object | optional | - | caption text style |
| `captionContainerStyle` | object | optional | - | caption container style |
| `imgContainerStyle` | object | optional | - | image container style |
