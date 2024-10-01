import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
        <View className="m-2">
            <Text className="border-red-700 border-2">Cheese page 🧀 </Text>
            <Link href="/sandwich">This is my sandwich 💀 </Link>
            <button class="relative z-0 h-12 rounded-full bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">Hover me</button>
        </View>
    )
}

