import { Text, View } from 'react-native';
import { Link } from 'expo-router'; 

export default function Page() {
  return (
    <View>
        <Text>This is my "index" page</Text>
        <Link href="/sandwich">Home</Link>
    </View>
  )
}