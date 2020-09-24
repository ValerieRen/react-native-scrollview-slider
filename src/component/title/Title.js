import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';

const Title = ({
  title,
  caption,
  titleTextStyle,
  titleContainerStyle,
  captionTextStyle,
  captionContainerStyle,
}) => {
  return (
    <View style={[styles.titleContainer, titleContainerStyle]}>
      {title === undefined ? null : (
        <View style={[styles.title, titleTextStyle]}>
          <Text>{title}</Text>
        </View>
      )}
      {caption === undefined ? null : (
        <View style={[styles.caption, captionContainerStyle]}>
          <Text style={[styles.captionText, captionTextStyle]}>{caption}</Text>
        </View>
      )}
    </View>
  );
};

export default Title;
