import React, {useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';
import styles from './styles';
import TextOverImage from '../textOverImage/TextOverImage';
import Title from '../title/Title';
import Indicator from '../indicator/Indicator';
const {width, height} = Dimensions.get('window');

const Slider = ({dataSource, imgWidth, imgHeight}) => {
  const scrollRef = useRef();
  const [active, setActive] = useState(0);

  const sizeProps = {
    width: imgWidth || width * 0.7,
    height: imgHeight || height * 0.6,
  };

  const onChangeScroll = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active && slide < dataSource.length) {
      setActive(slide);
    }
  };

  return (
    <View style={[sizeProps, styles.imgContainer]}>
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        onScroll={onChangeScroll}
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
        style={sizeProps}>
        {dataSource.map((source, index) => (
          <View key={index}>
            <Title title={source.title} caption={source.caption} />
            <Image
              style={[sizeProps, setImageStyle(sizeProps.height)]}
              source={{uri: source.imgUrl}}
            />
            <TextOverImage
              title={source.titleOverImg}
              text={source.textListOverImg}
            />
          </View>
        ))}
      </ScrollView>
      {/* SECTION INDICATOR */}
      <Indicator dataSource={dataSource} active={active} />
      {/* SECTION INDICATOR */}
    </View>
  );
};

const setImageStyle = (sizeHeight) => {
  return {
    height: sizeHeight * 0.85,
    borderRadius: 20,
    resizeMode: 'cover',
  };
};

export default Slider;
