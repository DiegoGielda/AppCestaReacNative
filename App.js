import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/cestas';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}