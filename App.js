//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';


export default  App=()=>{
const[newWord,SetNewWord]=useState('')
const[checkedWord,SetCheckedWord]=useState('')
const[definition,SetDefinition]=useState('')
//const[example,SetExample]=useState('')

const searchWord=(enteredWord)=>{
  SetNewWord(enteredWord)
};

const getInfo= async () =>{
var url="https://api.dictionaryapi.dev/api/v2/entries/en/"+newWord;
  const data = await fetch(url);
  const response = await data.json();
  var word = response[0].word;
  SetCheckedWord(word);
  var def = response[0].meanings[0].definitions[0].definition;
  SetDefinition(def);
  //var eg = response[0].meanings[0].definitions[0].example;
  //SetExample(eg);
  };

  /*const getInfo=useEffect(()=>{
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<word>")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setPost(data);
    })
  },[])*/


  const clear = () => {
    SetCheckedWord("");
    SetDefinition("");
   // SetExample("");
    SetNewWord("");
  };


  return (


  /*<View style={styles.container}>*/

    <View style={{flex:0.8}}>
<View style={{justifyContent:"center", alignItems:"center"}}>
<View>
  <Text style={styles.heading}>Dictionary</Text>
</View>
  <TextInput
  style={styles.inputBox} 
  placeholder='search a word'
  placeholderTextColor={"rgba(0,0,0,7"}
  textAlign="center"
  clearButtonMode="always"
  onChangeText={searchWord}
  value={newWord}
  > 
  </TextInput>
    <View
     style={{
      flexDirection: "row",
     justifyContent: "space-between",
      width: "60%",
      marginTop: 20,
     marginBottom: 20,
      }}>
<TouchableOpacity
style={styles.buttonDesign}
onPress={() => {
  getInfo();

}}>
<Text style={styles.buttonText}>Go</Text>
</TouchableOpacity>
<TouchableOpacity
 style={styles.buttonDesign}
  onPress={()=>{
  clear();
}}>
<Text style={styles.buttonText}>Clear</Text>
  
</TouchableOpacity>

   </View>

 <View>
<Text style={styles.textDesign}>
  Entered Word :{checkedWord}{" "}
  </Text>
  <Text style={styles.textDesign}>Definition : {definition} </Text>
  {/*<Text style={styles.textDesign}>Example : {example} </Text>*/}
     </View>
    </View>
    </View>
   /*<StatusBar style="auto"/>
    </View>*/
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    width:"60%",
    height:50,
    color:"black",
    marginTop:100,
    fontSize:40,
  },
  inputBox:{
    width:"80%",
    height:50,
    borderWidth:5,
    borderColor:"black",
    marginTop:100,
    marginBottom:50,
    fontSize:25,

  },
  buttonDesign: {
    backgroundColor: "rgba(80, 235, 236,0.3)",
    width: 80,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    alignSelf: "center",
    marginTop: 5,
  },
  textDesign: {
    fontSize: 25,
    //backgroundColor: "rgba(80, 235, 236,0.3)",
    marginTop: 10,
    alignSelf: "center",
  },

});