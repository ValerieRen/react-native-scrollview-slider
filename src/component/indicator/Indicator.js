import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Indicator = ({
  dataSource,
  active,
  indicatorColor,
  selectedIndicatorColor,
  indicatorContainerStyle,
  indicatorStyle,
  indicatorSelectedStyle,
}) => {
  return (
    <View style={[styles.indicatorContainer, indicatorContainerStyle]}>
      {dataSource.map((_, index) => {
        return (
          <View
            key={index}
            style={[
              [
                styles.indicator,
                indicatorStyle,
                setIndicatorSize(16),
                setIndicatorColor(indicatorColor || 'gray'),
              ],
              active === index && [
                styles.indicatorSelected,
                indicatorSelectedStyle,
                setIndicatorColor(selectedIndicatorColor || 'blue'),
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
