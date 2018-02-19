import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tituloCab: {
    color: '#333',
    fontSize:18,
    fontWeight:'bold'
  },
  principal:{
    backgroundColor:'#FFF',
    marginBottom:20,
    marginHorizontal:20,
    padding:20,
    borderRadius:7
  },
  textDesc:{
    color:"#666"
  },
  textAutor:{
    color:"#999",
    paddingBottom:7,
    marginBottom:7,
    borderBottomWidth:1,
    borderColor:'#EEE'
  }
});

const Post = ({ title,author,desc }) => (
  <View style={styles.principal} >

    <View>
      <Text style={styles.tituloCab} >{title}</Text>
      <Text style={styles.textAutor} >{author}</Text>
    </View>

    <View>
      <Text style={styles.textDesc} >{desc}</Text>
    </View>

  </View>


);

export default Post;
