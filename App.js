import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
  <ScrollView style={{marginTop: 30}}>
    <Card/>

    <View style={styles.card}>
      <Text style={styles.título}>Hello World!</Text>
      <Text> Eu sou a Rafa Leite</Text>
      <Text style ={styles.peq}>Sim, Leite!</Text>
      <Text>Atriz, influencer e modelo</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.card}>
      <Text style={styles.título}>Sobre mim:</Text>
      <Text> Atriz desde os 11 anos</Text>
      <Text style ={styles.peq}>Isto é um paragrafo</Text>
      <Text>Isto é um paragrafo</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.card}>
      <Text style={styles.título}>Hello World!</Text>
      <Text> Isto é um paragrafo</Text>
      <Text style ={styles.peq}>Isto é um paragrafo</Text>
      <Text>Isto é um paragrafo</Text>
      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {  
    margin: 20,  
    backgroundColor: 'pink',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'pink',},
  
  título: {

    padding: 20,
    color: 'purple',
    fontsize: 30,
    marginBottom: 30,
    borderBottomColor: 'pink',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    TextAlign:'center',
    backgroundColor:'violet'},

  peq: {
    fontSize: 10,
  }
});
