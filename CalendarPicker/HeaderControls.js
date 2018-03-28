import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    onPressTitle,
    months,
    previousTitle,
    nextTitle,
    textStyle,
    calendarIsShown,
    hideControlButtons,
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'Previous';
  const next = nextTitle ? nextTitle : 'Next';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View style={styles.headerWrapper}>
      {!hideControlButtons &&
      <Controls
        label={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />
      }
      <Controls
        label={`${ month } ${ year }`}
        onPressControl={onPressTitle}
        styles={[styles.monthLabel]}
        textStyles={textStyle}
        chevronPos={(calendarIsShown ? 'up' : 'down')}
      />
      {!hideControlButtons &&
      <Controls
        label={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
      }
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
  onPressTitle: PropTypes.func,
  calendarIsShown: PropTypes.bool,
  hideControlButtons: PropTypes.bool,
};
