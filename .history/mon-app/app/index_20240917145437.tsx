import { Text, View } from 'react-native';
import { Link } from 'expo-router'; 

export default function Page() {
  return (
    <View>
        <Text>This is my "index" page</Text>
        <Link href="/sandwich">This is my sandwich 💀 </Link>
        <Link href="/cheese">This is my cheese 🤡 </Link>
    </View>
  )
}