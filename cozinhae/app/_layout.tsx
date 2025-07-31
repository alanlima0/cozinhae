import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerTitle: "LOGIN"}}/>
            <Stack.Screen name="home" options={{headerTitle: "RECEITAS"}}/>
            <Stack.Screen name="recipe/[recipeId]" options={{headerTitle: "RECEITAS"}}/>
        </Stack>
    )
}