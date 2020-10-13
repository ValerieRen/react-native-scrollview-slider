import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import TextOverImage from '../textOverImage/TextOverImage';
import Title from '../title/Title';
import Indicator from '../indicator/Indicator';
const {width, height} = Dimensions.get('window');
import PropTypes from 'prop-types';

const Slider = ({
  dataSource,
  imgWidth,
  imgHeight,
  indicatorColor,
  selectedIndicatorColor,
  indicatorContainerStyle,
  indicatorStyle,
  indicatorSelectedStyle,
  textOverImageContainerStyle,
  textOverImageTitleStyle,
  textOverImageTextStyle,
  titleTextStyle,
  titleContainerStyle,
  captionTextStyle,
  captionContainerStyle,
  containerStyle,
  onPress,
  clickable,
}) => {
  const scrollRef = useRef();
  const [active, setActive] = useState(0);

  const sizeProps = {
    width: imgWidth,
    height: imgHeight,
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
    <View style={[sizeProps, styles.container, containerStyle]}>
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        onScroll={onChangeScroll}
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
        style={sizeProps}>
        {dataSource.length > 0 &&
          dataSource.map((source, index) => (
            <View key={index}>
              <Title
                title={source.title}
                caption={source.caption}
                titleTextStyle={titleTextStyle}
                titleContainerStyle={titleContainerStyle}
                captionTextStyle={captionTextStyle}
                captionContainerStyle={captionContainerStyle}
              />
              {clickable ? (
                <TouchableOpacity onPress={onPress}>
                  <ClickableSlide
                    sizeProps={sizeProps}
                    source={source}
                    textOverImageContainerStyle={textOverImageContainerStyle}
                    textOverImageTextStyle={textOverImageTextStyle}
                    textOverImageTitleStyle={textOverImageTitleStyle}
                  />
                </TouchableOpacity>
              ) : (
                <ClickableSlide
                  sizeProps={sizeProps}
                  source={source}
                  textOverImageContainerStyle={textOverImageContainerStyle}
                  textOverImageTextStyle={textOverImageTextStyle}
                  textOverImageTitleStyle={textOverImageTitleStyle}
                />
              )}
            </View>
          ))}
      </ScrollView>
      {/* SECTION INDICATOR */}
      <Indicator
        dataSource={dataSource}
        active={active}
        indicatorColor={indicatorColor}
        selectedIndicatorColor={selectedIndicatorColor}
        indicatorContainerStyle={indicatorContainerStyle}
        indicatorStyle={indicatorStyle}
        indicatorSelectedStyle={indicatorSelectedStyle}
      />
      {/* SECTION INDICATOR */}
    </View>
  );
};

const ClickableSlide = ({
  sizeProps,
  source,
  textOverImageContainerStyle,
  textOverImageTitleStyle,
  textOverImageTextStyle,
}) => {
  return (
    <>
      <Image
        style={{...sizeProps, ...setImageStyle(sizeProps.height)}}
        source={{uri: source.imgUrl}}
      />
      <TextOverImage
        title={source.titleOverImg}
        text={source.textListOverImg}
        textOverImageContainerStyle={textOverImageContainerStyle}
        textOverImageTitleStyle={textOverImageTitleStyle}
        textOverImageTextStyle={textOverImageTextStyle}
      />
    </>
  );
};

const setImageStyle = (sizeHeight) => {
  return {
    height: sizeHeight * 0.75,
    borderRadius: 20,
    resizeMode: 'cover',
  };
};

Slider.defaultProps = {
  dataSource: [],
  imgWidth: width * 0.7,
  imgHeight: height * 0.6,
  indicatorColor: '',
  selectedIndicatorColor: '',
  indicatorContainerStyle: {},
  indicatorStyle: {},
  indicatorSelectedStyle: {},
  textOverImageContainerStyle: {},
  textOverImageTitleStyle: {},
  textOverImageTextStyle: {},
  titleTextStyle: {},
  titleContainerStyle: {},
  captionTextStyle: {},
  captionContainerStyle: {},
  containerStyle: {},
  clickable: false,
};

Slider.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      caption: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      titleOverImg: PropTypes.string,
      textListOverImg: PropTypes.array,
    }),
  ).isRequired,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  indicatorColor: PropTypes.string,
  selectedIndicatorColor: PropTypes.string,
  indicatorContainerStyle: PropTypes.object,
  indicatorStyle: PropTypes.object,
  indicatorSelectedStyle: PropTypes.object,
  textOverImageContainerStyle: PropTypes.object,
  textOverImageTitleStyle: PropTypes.object,
  textOverImageTextStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  titleContainerStyle: PropTypes.object,
  captionTextStyle: PropTypes.object,
  captionContainerStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  onPress: PropTypes.func,
  clickable: PropTypes.bool,
};

export default Slider;
