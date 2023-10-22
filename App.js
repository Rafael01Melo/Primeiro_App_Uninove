import { Text, View } from 'react-native';
import Principal from './src/Telas/Principal';
import Header from './src/Components/Header';

export default function App() {
  return (
    <View>
      <Header />
      <Principal />
    </View>
  );
}