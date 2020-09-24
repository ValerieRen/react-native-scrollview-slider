import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';

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

export default Title;
