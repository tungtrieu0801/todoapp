import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Props {
    children: ReactNode;
    bgColor?: string;
    styles?: StyleProp<ViewStyle>
}

const CardComponens = (props: Props) => {
    const {children, bgColor, styles} = props;
  return (
    <View style={[globalStyles.inputContainer,{padding:12}] }>
        {children}
    </View>
  )
}

interface Props {
    children: ReactNode;
    bgColor?: string;
    styles?: StyleProp<ViewStyle>
}

export default CardComponens