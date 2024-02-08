import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containera}>Batatas </Text>
      <div style={styles.abc}><Text>A batata, um alimento básico global, é valorizada por sua versatilidade, valor nutricional e capacidade de adaptação. Originária dos Andes, ela é rica em carboidratos, fibras, vitaminas e minerais. Amplamente utilizada na culinária, a batata é apreciada em diversas formas, desde batatas fritas crocantes até purês cremosos. Além de seu papel na alimentação, a batata desempenha um papel crucial na segurança alimentar global, embora enfrente desafios como doenças e mudanças climáticas. Em resumo, a batata é um símbolo de resiliência agrícola e diversidade culinária, presente nas mesas de milhões em todo o mundo. </Text> </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  abc: {
  alignItems: 'center',
  border: '1px solid red',
  backgroundColor: '#ff3',
  fontSize: '90px',
  maxWidth: '1000px'
  },
  containera: {
   fontSize: '100px',
   }
  });
   



