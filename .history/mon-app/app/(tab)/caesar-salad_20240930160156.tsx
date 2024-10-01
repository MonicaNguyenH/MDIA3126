import { Text, View, StyleSheet } from 'react-native';

import InputForm from '@/components/molecules/InputForm';


export default function Page() {
    return (
    <View style={makeItPretty.saladPage}>
            <Text className="mb-4 text-4xl underline decoration-red-500 hover:italic" style={makeItPretty.pageTitle}>Ceasar Salad from Best of Bridge (1980)</Text>
            
            <InputForm 
                labelText="Let me know what you think of the recipe!"
                placeholderText="Yum, it looks tasty!"
               buttonText="Submit"
            />

            <p className="mb-2">
                🥬 This is a really "professional" tasting Caesar because you must do everything from scratch. With the exception of the final mixing, this can be done ahead of time. Use Brownberry Oven croutons, they are the best around. 🥬
            </p>

            <div style={makeItPretty.section}>
                <p style={makeItPretty.heading}>Ingredients</p>
                <p>1 romaine lettuce</p>
                <p>2 cloves garlic</p>
                <p>6 tbsp. olive oil</p>
                <p>¾ tsp. salt</p>
                <p>¼ tsp. black pepper</p>
                <p>¼ tsp. dry mustard</p>
                <p>1½ tsp. worcestershire sauce</p>
                <p>1 tsp. anchovy paste OR 3 chopped anchovies</p>
                <p>1 egg</p>
                <p>2 tbsp. grated parmesan</p>
                <p>2 tbsp. lemon juice</p>
            </div>

            <div style={makeItPretty.section}>
            <p style={makeItPretty.heading}>Method</p>
            <p>Prepare romaine lettuce by washing and drying thoroughly. Be sure to discard any wilted or discoloured leaves.</p>
            <p>Set aside ½ a clove of garlic, mince the remaining peices if not using a blender.</p>
            <p>Mix oil, remaining garlic, salt, pepper, mustard, worcester, and anchovies in a blender or vigorously by hand.</p>
            <p>In a small saucepan, bring 2" of water to boiling. Turn off the heat and carefully lower egg into water. Let stand 1 minute, then lift out and set aside to cool.</p>
            <p>Just before serving, rub the inside of the salad bowl with the half garlic clove set aside earlier. Tear romaine in bite size peices into salad bowl.</p>
            <p>Shake dressing and pour over lettuce. Sprinkle lettuce with parmesan. Toss until all leaves are coted with dressing. Break egg over centre of salad (I only use the yolk). Pour lemon juice directly over egg; toss well.</p>
            <p>Sprinkle with croutons and toss quickly again. Serve at once.</p>


            
            </div>
       </View>
  )
}

const makeItPretty = StyleSheet.create({
    saladPage: {
        fontFamily: 'Arial',
        fontVariantCaps: 'all-small-caps',
        fontSize: 20,
        margin: 20
    },
    pageTitle: {
        fontFamily: 'SwankyandMooMoo',
        fontVariantCaps: 'all-small-caps',
        borderColor: 'blue',
        borderWidth: 2,
        borderStyle: 'solid',

    },
    section: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
        borderRadius: 8,
        padding: 12,
        position: 'relative',
        marginBottom: 20
    },
    heading: {
        position: 'absolute',
        transform: 'translateX(-50%)',
        left: '50%',
        top: -15,
        backgroundColor: 'rgb(242, 242, 242)',
        paddingLeft: 10,
        paddingRight: 10
    }
  });
