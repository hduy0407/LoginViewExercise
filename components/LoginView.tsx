import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export function LoginView({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('Email:',email)
        console.log('Password:',password)
    } 

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Please sign in to continue.</Text>
          
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="envelope" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="email"
              keyboardType="email-address"
            />
          </View>
          
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="password"
              secureTextEntry
            />
            <TouchableOpacity onPress={() => console.log('Forgot password clicked')}>
              <Text style={styles.forgotLink}>FORGOT</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    icon: { marginRight: 10 },
    label: { fontSize: 16 },
    input: { 
        flex: 1, 
        padding: 10, 
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 3, 
        shadowColor: '#A9A9A9', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 4, 
      },
    forgotLink: { color: 'orange', marginLeft: 10 },
    button: { backgroundColor: '#FED000', padding: 10, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
    buttonPressed: {
        shadowColor: 'orange', // Orange shadow on press
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10, // Ensure it appears on Android as well
    },
    buttonText: { color: 'white', fontSize: 16 },
    link: { color: 'orange', marginTop: 10, textAlign: 'center' }
});