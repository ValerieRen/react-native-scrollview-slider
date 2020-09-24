import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';

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

export default TextOverImage;
