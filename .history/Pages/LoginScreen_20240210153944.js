// Import des composants React Native nécessaires
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Définition du composant LoginScreen
const LoginScreen = () => {
  // États pour stocker les valeurs des champs de saisie
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = () => {
    // Implémentez ici la logique de connexion
    console.log('Connexion avec :', email, password);
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
