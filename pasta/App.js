import {useState, useEffect} from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';

const App = ({navigation}) => {
  const [lista, setLista] = useState([]);
 // const [carregar, setCarregar] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/raquelm16/repos');
        setLista(response.data);
       // setCarregar(false);
      }
      catch (error) {
        console.error(
          'Houve um erro na listagem dos repositórios', error
        );
      }
    };

    fetchData();
  }, []);

  //if (carregar){
  //  return(
  //    <View>
  //      <ActivityIndicator size='large'/>
  //    </View>
  //  );
  //}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Repositórios Github</Text>
      <Text style={styles.user}>@raquelm16</Text>

    <FlatList
    data={lista}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <Text style={styles.listaStyle}>
        {item.name}
      </Text>
    )}
    />

    </View>
  );
  }


  export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9d4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:18,
    marginTop:25,
    marginBottom:8,
    fontWeight:'700',
    color:'#7a305e',
  },
  user:{
    marginBottom:20,
    color:'#7a305e'
  },
  listaStyle: {
    //color:'#51ae',
    fontSize:16,
    margin:5,
    fontWeight:'600',
    backgroundColor:'#7a305e',
    color:'#ededed',
    borderRadius:5,
    padding:13,
    textAlign:'center'
  }
});
