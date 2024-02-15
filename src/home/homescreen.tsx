import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';
import RowComponents from '../components/RowComponents';
import SectionComponents from '../components/SectionComponents';
import TextComponent from '../components/TextComponent';
import TitleComponents from '../components/TitleComponents';
import CardComponens from '../components/CardComponens';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponents>
        <RowComponents justify="space-between">
          <TextComponent text='data' />
          <TextComponent text='data' />
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
          <TextComponent text='Tungg' />
          <TitleComponents text='Be productive today' />
      </SectionComponents>
      <SectionComponents>
        <RowComponents styles={globalStyles.inputContainer} onPress={()=>console.log("hi")}>
            <TextComponent text='Search' />
            <Text style={{color:'white'}}>S</Text>
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
        <CardComponens>
            <RowComponents>
                <View style={{flex:1}}>
                    <TitleComponents text='Task progress' />
                    <TextComponent text='30/40 tasks done' />
                    <TextComponent text='Tag' />
                </View>
                <View>
                    <TextComponent text='ok'/>
                </View>
            </RowComponents>
        </CardComponens>
      </SectionComponents>
    </Container>
  );
};

export default HomeScreen;
