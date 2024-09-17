import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return ( 
    <View>
      <Text>Sandwich page 🥪 </Text>
      <Link href="/cheese">This is my cheese 🤡 </Link>
    </View>
  )
}