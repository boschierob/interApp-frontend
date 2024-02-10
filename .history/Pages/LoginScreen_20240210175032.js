// Import des composants React Native nécessaires
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Définition du composant LoginScreen
const LoginScreen = ({ navigation }) => {
  // États pour stocker les valeurs des champs de saisie
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire de connexion
 const handleLogin = async () => {
     // Vérifier si l'adresse e-mail est valide
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    // Afficher un message d'erreur si l'adresse e-mail n'est pas valide
    alert('Veuillez saisir une adresse e-mail valide');
    return; // Sortir de la fonction sans envoyer la requête au serveur
  }

  try {
    console.log(`tentative de connection au serveur: ${email} et ${password}`);
    // Envoyer les informations d'identification à votre serveur Node.js
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log(`response`);

    if (!response.ok) {
      // Gérer les erreurs de connexion (par exemple, si les identifiants sont incorrects)
      throw new Error('Identifiants incorrects');
    }

    // Récupérer le JWT en réponse
    //const data = await response.json();
    //const token = data.token;

// Stocker le JWT localement dans AsyncStorage
//await AsyncStorage.setItem('jwtToken', token);

console.log('Utilisateur connecté, JWT:', token);  
  // Assurez-vous de sécuriser le stockage du JWT : 

    console.log('Utilisateur connecté, JWT:', token);
    
    navigation.navigate('InterventionDeclarationScreen');
  } catch (error) {
    // Gérer les erreurs de connexion
    console.error('Merde:', error.message);
    // Afficher un message d'erreur à l'utilisateur, par exemple
    alert('Merde: ' + error.message);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connectez-vous</Text>

      {/* Champ de saisie pour l'adresse e-mail */}
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      {/* Champ de saisie pour le mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* Bouton de connexion */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      {/* Lien pour réinitialiser le mot de passe */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles CSS pour l'écran de connexion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#add8e6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#007bff', // Couleur de lien bleu
    textAlign: 'center',
  },
});

export default LoginScreen;
