import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
        <View>
            <Text>Cheese page 🧀 </Text>
            <Link href="/sandwich">This is my sandwich 💀 </Link>
        </View>
    )
}