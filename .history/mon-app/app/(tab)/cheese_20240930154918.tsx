import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Wiggle } from '@/components/atoms/Wiggle';

export default function Home() {
  return (
        <View className="items-center">
            <Wiggle wiggler="🤡" />
            <Text className="border-red-700 border-2">Cheese page 🧀 </Text>
            <Link href="/sandwich">This is my sandwich 💀 </Link>
        </View>
    )
}

