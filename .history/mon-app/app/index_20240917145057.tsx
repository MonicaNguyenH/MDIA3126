import { Text } from 'react-native';
import { Link } from 'expo-router'; 

export default function Page() {
  return (
    <View>
        <Text>This is my "index" page</Text>
        <Link href="/home">Home</Link>
    </View>
  )
}