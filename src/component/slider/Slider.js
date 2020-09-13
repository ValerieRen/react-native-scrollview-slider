import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Slider = ({dataSource, imgWidth, imgHeight}) => {
  const scrollRef = useRef();
  const [active, setActive] = useState(0);

  const sizeProps = {
    width: imgWidth || width * 0.7,
    height: imgHeight || height * 0.6,
  };

  const onChange = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active && slide < dataSource.length) {
      setActive(slide);
    }
  };

  const handleClickIndicator = (index) => {
    scrollRef.current.scrollTo({
      x: imgWidth * index,
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={[sizeProps, styles.imgContainer]}>
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        onScroll={onChange}
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
        style={sizeProps}>
        {dataSource.map((source, index) => (
          <View key={index}>
            <Title title={source.title} caption={source.caption} />
            <Image
              style={[
                sizeProps,
                {
                  height: sizeProps.height * 0.85,
                  borderRadius: 20,
                  resizeMode: 'cover',
                },
              ]}
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
      <View style={styles.indicatorContainer}>
        {dataSource.map((_, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleClickIndicator(index)}
              style={[
                [
                  styles.indicator,
                  setIndicatorSize(16),
                  setIndicatorColor('gray'),
                ],
                active === index && [
                  styles.indicatorSelected,
                  setIndicatorColor('blue'),
                ],
              ]}>
              <View />
            </TouchableOpacity>
          );
        })}
      </View>
      {/* SECTION INDICATOR */}
    </View>
  );
};

const Title = ({title, caption}) => {
  return (
    <View style={styles.titleContainer}>
      {title === undefined ? null : (
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
      )}
      {caption === undefined ? null : (
        <View style={styles.caption}>
          <Text style={styles.captionText}>{caption}</Text>
        </View>
      )}
    </View>
  );
};

const TextOverImage = ({title, text}) => {
  return (
    <View style={styles.layout}>
      {title ? <Text style={styles.textTitle}>{title}</Text> : null}
      {text instanceof Array && text.length > 0
        ? text.map((t, index) => (
            <Text key={index} style={styles.text}>
              {t}
            </Text>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 0,
    alignSelf: 'center',
  },
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
    color: 'red',
    backgroundColor: 'white',
  },
  text: {
    padding: 5,
    color: 'red',
    backgroundColor: 'white',
  },
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
  caption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionText: {
    paddingVertical: 10,
  },
});

const setIndicatorSize = (size) => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
  };
};

const setIndicatorColor = (color) => {
  return {
    backgroundColor: color,
  };
};

export default Slider;
