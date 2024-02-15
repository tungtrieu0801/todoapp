import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {fontFamily} from '../constants/fontsFamily';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}

const TextComponent = (props: Props) => {
  const {text, font, size, color, flex} = props;
  return (
      <Text
        style={[
          globalStyles.text,
          {
            flex: flex ?? 1,
            fontFamily: font ?? fontFamily.regular,
            fontSize: size ?? 15,
            color: color ?? colors.desc,
          },
        ]}>
        {text}
      </Text>
  );
};

export default TextComponent;
