import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Indicator = ({dataSource, active}) => {
  return (
    <View style={styles.indicatorContainer}>
      {dataSource.map((_, index) => {
        return (
          <View
            key={index}
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
            ]}
          />
        );
      })}
    </View>
  );
};

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

export default Indicator;
