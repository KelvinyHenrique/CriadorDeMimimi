import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';



export default class fristproject extends Component {
  
  constructor(props) {
    super(props);
    this.state = {texto1: 'Texto 1', texto2: 'Texto 2'}
    
    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g,'i');
    novoTexto = novoTexto.replace(/(á|à|â|ã)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i');
    novoTexto = novoTexto.replace(/(ô|ò|ó|õ)/g, 'i');
    novoTexto = novoTexto.replace(/(û|ú|ù)/g, 'i');
    return novoTexto;
  }

  escrever(t) {
    let s = this.state;
    s.texto1 = t;
    s.texto2 =  this.mudarVogais(t);
    this.setState(s);
  }

  
  
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de MiMiMi</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi" onChangeText={this.escrever}/>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
            <Image style={styles.guri} source={require('./image/mimimi.jpg')}></Image>
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    paddingTop:30, 
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF'
  },

  inputArea: {
    alignSelf: 'stretch',
  }, 

  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#eeeeee',
    height: 50,
    margin: 20,
    padding: 10
  },

  area: {
    width: 300,
    height: 300,
    marginTop: 10
  },
  guri: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0
  },

  texto: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    height: 70
  },

  texto1: {
    zIndex: 1,
  },


  texto2: {
    zIndex: 1,
    marginTop: -70
  },




});