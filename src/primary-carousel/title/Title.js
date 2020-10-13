import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({
  title,
  caption,
  titleTextStyle,
  titleContainerStyle,
  captionTextStyle,
  captionContainerStyle,
}) => {
  return (
    <View style={styles.titleContainer}>
      {title === undefined ? null : (
        <View style={{...styles.title, ...titleContainerStyle}}>
          <Text style={{...styles.titleText, ...titleTextStyle}}>{title}</Text>
        </View>
      )}
      {caption === undefined ? null : (
        <View style={{...styles.caption, ...captionContainerStyle}}>
          <Text style={{...styles.captionText, ...captionTextStyle}}>{caption}</Text>
        </View>
      )}
    </View>
  );
};

Title.defaultProps = {
  title: '',
  caption: '',
  titleTextStyle: {},
  titleContainerStyle: {},
  captionTextStyle: {},
  captionContainerStyle: {},
};

Title.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  titleTextStyle: PropTypes.object,
  titleContainerStyle: PropTypes.object,
  captionTextStyle: PropTypes.object,
  captionContainerStyle: PropTypes.object,
};

export default Title;
