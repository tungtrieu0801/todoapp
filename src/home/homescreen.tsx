import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';
import RowComponents from '../components/RowComponents';
import SectionComponents from '../components/SectionComponents';
import TextComponent from '../components/TextComponent';
import TitleComponents from '../components/TitleComponents';
import CardComponens from '../components/CardComponens';
import { Element4, Notification, SearchNormal1 } from 'iconsax-react-native';
import { colors } from '../constants/colors';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponents>
        <RowComponents justify="space-between">
          <Element4 size={24} color = {colors.desc} />
          <Notification size={24} color = {colors.desc} />
        
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
          <TextComponent text='Tungg' />
          <TitleComponents text='Be productive today' />
      </SectionComponents>
      <SectionComponents>
        <RowComponents styles={globalStyles.inputContainer} onPress={()=>console.log("hi")}>
            <TextComponent color="#696B6F" text='Search task' />
            <SearchNormal1 size={20} color= {colors.desc} />
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
        <CardComponens>
            <RowComponents>
                <View style={{flex:1}}>
                    <TitleComponents text='Task progress' />
                    <TextComponent text='30/40 tasks done' />
                    <SpaceComponent height={12} />
                    <RowComponents justify="flex-start">
                      <TagComponent text='Match 22'/>
                    </RowComponents>
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
