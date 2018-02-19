
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import Post from 'components/Post';

export default class App extends Component {

  state={
    posts:[
      {
        key:0,
        titulo:'Aprendendo React Native' ,
        autor:'Everthon Souza',
        descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor tortor vel augue vulputate, vitae porta odio efficitur. Integer vehicula tellus ligula, quis interdum massa sollicitudin sed. Pellentesque sit amet feugiat nibh. Phasellus lacus ipsum'
      },
      {
        key:1,
        titulo:'Aprendendo React Native' ,
        autor:'Maria Souza',
        descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor tortor vel augue vulputate, vitae porta odio efficitur. Integer vehicula tellus ligula, quis interdum massa sollicitudin sed. Pellentesque sit amet feugiat nibh. Phasellus lacus ipsum'
      },
      {
        key:2,
        titulo:'Aprendendo React Native' ,
        autor:'João Souza',
        descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor tortor vel augue vulputate, vitae porta odio efficitur. Integer vehicula tellus ligula, quis interdum massa sollicitudin sed. Pellentesque sit amet feugiat nibh. Phasellus lacus ipsum'
      },
      {
        key:3,
        titulo:'Aprendendo React Native' ,
        autor:'Marcos Souza',
        descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor tortor vel augue vulputate, vitae porta odio efficitur. Integer vehicula tellus ligula, quis interdum massa sollicitudin sed. Pellentesque sit amet feugiat nibh. Phasellus lacus ipsum'
      },
      {
        key:4,
        titulo:'Aprendendo React Native' ,
        autor:'Lorena Souza',
        descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor tortor vel augue vulputate, vitae porta odio efficitur. Integer vehicula tellus ligula, quis interdum massa sollicitudin sed. Pellentesque sit amet feugiat nibh. Phasellus lacus ipsum'
      },
    ]

  }

  render() {
    return (
    <View style={styles.container}>
          <View style={styles.viewTextcab} >
            <Text style={{fontSize:18}} >GoNative APP</Text>
          </View>

      <View style={styles.posts} >
      <ScrollView>
        {this.state.posts.map(posts=>(

        <Post
        key={posts.key}
        title={posts.titulo}
        author={posts.autor}
        desc={posts.descricao}
        />

      ))}
     </ScrollView>

     </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  posts:{
    flex:9,
    backgroundColor: '#EE7777',
    paddingTop:20,
  },
  viewTextcab:{
      flex:1,
      alignContent:"center",
      justifyContent:"center",
},
});
