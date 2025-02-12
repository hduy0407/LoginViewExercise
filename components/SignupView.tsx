import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function SignupView({navigation}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = () => {
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };
  
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={20} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="full name"
                />
            </View>
          
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
            </View>
          
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={20} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm password"
                    secureTextEntry
                />
            </View>
  
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.link}>Already have an Account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};
  
  const styles = StyleSheet.create({
      container: { flex: 1, justifyContent: 'center', padding: 20 },
      title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
      inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
      icon: { marginRight: 10 },
      label: { fontSize: 16 },
      input: { 
        flex: 1,
        borderWidth: 1, 
        padding: 10, 
        borderRadius: 5 
      },
      button: { backgroundColor: '#FED000', padding: 10, borderRadius: 5, alignItems: 'center', elevation: 2 },
      buttonText: { color: 'white', fontSize: 16 },
      link: { color: 'orange', marginTop: 10, textAlign: 'center' },
      backArrow: { fontSize: 24, marginBottom: 20, textAlign: 'left' },
      errorText: { color: 'red', marginBottom: 10, textAlign: 'center' }
  });