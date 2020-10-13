import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TextOverImage = ({
  title,
  text,
  textOverImageContainerStyle,
  textOverImageTitleStyle,
  textOverImageTextStyle,
}) => {
  return (
    <View style={{...styles.layout, ...textOverImageContainerStyle}}>
      {title ? (
        <Text style={{...styles.textTitle, ...textOverImageTitleStyle}}>
          {title}
        </Text>
      ) : null}
      {text instanceof Array && text.length > 0
        ? text.map((t, index) => (
            <Text
              key={index}
              style={{...styles.text, ...textOverImageTextStyle}}>
              {t}
            </Text>
          ))
        : null}
    </View>
  );
};

TextOverImage.defaultProps = {
  title: '',
  text: [],
  textOverImageContainerStyle: {},
  textOverImageTitleStyle: {},
  textOverImageTextStyle: {},
};

TextOverImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.array,
  textOverImageContainerStyle: PropTypes.object,
  textOverImageTitleStyle: PropTypes.object,
  textOverImageTextStyle: PropTypes.object,
};

export default TextOverImage;
