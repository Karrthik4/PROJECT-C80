import React, { Component} from 'react';
import { Header,Icon,Badge, Image } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import { render } from 'react-dom';

const MyHeader = props => {
    return (
      <Header
        leftComponent={<Icon name='list' type='font-awesome' color='#black'  onPress={() => props.navigation.toggleDrawer()}/>}
        centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
        backgroundColor = "pink"
      />
    );
  };
  
export default MyHeader;
