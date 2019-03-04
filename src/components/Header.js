import React from 'react';
import { Text, View } from 'react-native';

export default Header = props => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
});

const styles = {
  viewStyle: {
    backgroundColor: '#53a318',

    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    fontFamily: 'Pacifico-Regular',
    fontWeight: '600',
    color: 'white'
  }
};
