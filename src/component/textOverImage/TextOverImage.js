import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const TextOverImage = ({
  title,
  text,
  textOverImageContainerStyle,
  textOverImageTitleStyle,
  textOverImageTextStyle,
}) => {
  return (
    <View style={[styles.layout, textOverImageContainerStyle]}>
      {title ? (
        <Text style={[styles.textTitle, textOverImageTitleStyle]}>{title}</Text>
      ) : null}
      {text instanceof Array && text.length > 0
        ? text.map((t, index) => (
            <Text key={index} style={[styles.text, textOverImageTextStyle]}>
              {t}
            </Text>
          ))
        : null}
    </View>
  );
};

export default TextOverImage;
