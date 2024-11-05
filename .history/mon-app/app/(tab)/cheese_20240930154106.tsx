import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
        <View className="m-2">
            <Text className="border-red-700 border-2">Cheese page 🧀 </Text>
            <Link href="/sandwich">This is my sandwich 💀 </Link>
        </View>
    )
}

