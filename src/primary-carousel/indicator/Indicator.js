import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

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
    <View style={{...styles.indicatorContainer, ...indicatorContainerStyle}}>
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

Indicator.defaultProps = {
  dataSource: [],
  active: 0,
  indicatorColor: '',
  selectedIndicatorColor: '',
  indicatorContainerStyle: {},
  indicatorStyle: {},
  indicatorSelectedStyle: {},
};

Indicator.propTypes = {
  dataSource: PropTypes.array,
  active: PropTypes.number,
  indicatorColor: PropTypes.string,
  selectedIndicatorColor: PropTypes.string,
  indicatorContainerStyle: PropTypes.object,
  indicatorStyle: PropTypes.object,
  indicatorSelectedStyle: PropTypes.object,
};

export default Indicator;
