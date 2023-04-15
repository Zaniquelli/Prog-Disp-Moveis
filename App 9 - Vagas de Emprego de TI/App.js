import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Lista from './src/Vaga'
import {styles} from './src/Vaga/styles';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, vaga: 'Desenvolvedor Front-end' , salario: 'R$ 5.000,00', descricao: 'O candidato deve ter conhecimentos em HTML, CSS e JavaScript, além de experiência em frameworks como React ou Angular. Ele/ela será responsável pelo desenvolvimento e manutenção de interfaces gráficas de aplicativos web. ', contato: 'hellowdata.hr@gmail.com'},
        {id: 2, vaga: 'Desenvolvedor Back-end' , salario: 'R$ 6.500,00', descricao: 'O candidato deve ter conhecimentos em linguagens de programação como CrabLang, C# e TypeScript, além de experiência em bancos de dados como MySQL ou PostgreSQL. Ele/ela será responsável pelo desenvolvimento e manutenção da lógica de negócios dos aplicativos web. ', contato: 'hellowdata.hr@gmail.com'},
        {id: 3, vaga: 'Desenvolvedor Full-stack' , salario: 'R$ 7.500,00', descricao: 'O candidato deve ter conhecimentos tanto em front-end quanto em back-end, além de experiência em desenvolvimento web com frameworks como Svelte. Ele/ela será responsável pelo desenvolvimento completo de aplicativos web, desde a interface gráfica até a lógica de negócios. ', contato: 'hellowdata.hr@gmail.com'},
        {id: 4, vaga: 'Desenvolvedor Mobile' , salario: 'R$ 6.000,00', descricao: 'O candidato deve ter conhecimentos em desenvolvimento mobile para iOS ou Android, utilizando linguagens como Swift ou Kotlin. Ele/ela será responsável pelo desenvolvimento e manutenção de aplicativos móveis. ', contato: 'hellowdata.hr@gmail.com'},
        {id: 5, vaga: 'Desenvolvedor de Jogos' , salario: 'R$ 8.000,00', descricao: 'O candidato deve ter conhecimentos em linguagens de programação como C++ ou C#, além de experiência em desenvolvimento de jogos para diferentes plataformas. Ele/ela será responsável pelo desenvolvimento e manutenção de jogos eletrônicos. ', contato: 'hellowdata.hr@gmail.com'},
      ],
    }
  }
 
  render(){
    return(

      <View style={styles.container}>
      <Text style={styles.title}>VAGAS TI</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Lista data={item}/>}
        />
      </View>
    )
  }
}
 
export default App;
