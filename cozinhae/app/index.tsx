import {View, Text, TextInput, TouchableOpacity, Image, Button} from "react-native";
import styles from '../assets/styles/loginStyles';
import {router} from "expo-router";

export default function LoginPage() {

    function login(){
        router.replace("/home")
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
    
            <TextInput
                placeholder="Email"
                placeholderTextColor="#555"
                style={styles.input}
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#555"
                style={styles.input}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            
        </View>
    )
}