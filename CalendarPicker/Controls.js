import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ styles, textStyles, label, onPressControl, chevronPos }) {
/*
  ▲ - U+25B2 BLACK UP-POINTING TRIANGLE
  ▼ - U+25BC BLACK DOWN-POINTING TRIANGLE
  ▴ - U+25B4 SMALL BLACK UP-POINTING TRIANGLE
  ▾ - U+25BE SMALL BLACK DOWN-POINTING TRIANGLE
  */
 const ChevronUnicode = (!chevronPos ? null : (chevronPos === 'up' ? String.fromCodePoint(0x25B2) : String.fromCodePoint(0x25BC)) );

 return (
   <TouchableOpacity
     onPress={() => onPressControl()}
   >
     <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
       <Text style={[styles, textStyles]}>
         { label } <Text style={{ color: '#B2B2B2' }}>{ ChevronUnicode }</Text>
       </Text>
     </View>
   </TouchableOpacity>
 );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
