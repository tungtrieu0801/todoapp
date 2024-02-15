import {View, Text} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamily} from '../constants/fontsFamily';

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
}

const TitleComponents = (props: Props) => {
  const {text, font, size, color} = props;
  return (
      <TextComponent
        size={size ?? 20}
        font={font ?? fontFamily.semiBold}
        text={text}
        color={color}
      />
  );
};

export default TitleComponents;
