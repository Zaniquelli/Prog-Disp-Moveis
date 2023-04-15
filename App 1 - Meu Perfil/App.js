import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={{color: '#FFFF', fontSize: 30, margin: 15}}>
          Meu Perfil
        </Text>

      <Image
          source={{ uri: 'https://media.gettyimages.com/id/450450040/photo/studio-artist-rides-e-t-figure-to-its-new-home-in-the-film-experience-at-madame-tussauds-new.jpg?s=612x612&w=gi&k=20&c=OxWKAyr4nJVQvUv-spYNKPAKDNMmoA_38cWZsC0kJHM='}}
          style={{ width: 100, height: 100}}

      />
      <Text style={{color: '#FFFF', fontSize: 18, margin: 10}}> Dados Pessoais: </Text>
      <Text style={{color: '#28318B', fontSize: 15}}>Nome: Victor Zaniquelli</Text>

      <Text style={{color: '#FFFF', fontSize: 18, margin: 10}}>Formação: </Text>
      <Text style={{color: '#28318B', fontSize: 15, marginHorizontal: 20, textAlign: 'center'}}>Técnico em Contabilidade & cursando Análise e Desenvolvimento de Sistemas</Text>
      
      <Text style={{color: '#FFFF', fontSize: 18, margin: 10}}>Disciplina: </Text>
      <Text style={{color: '#28318B', fontSize: 15}}>Programação para Disp. Móveis</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3dfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
