import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const AuthScreen = () => {
  // Fonction pour gérer la connexion
  const handleLogin = async () => {
    try {
      // Envoyer les informations d'identification à votre serveur Node.js
      const response = await fetch('http://your-server-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'user', password: 'password' }),
      });

      // Récupérer le JWT en réponse
      const data = await response.json();
      const token = data.token;

      // Stocker le JWT localement (par exemple, dans AsyncStorage) pour une utilisation ultérieure
      // Assurez-vous de sécuriser le stockage du JWT

      console.log('Utilisateur connecté, JWT:', token);
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    try {
      // Envoyer une demande de déconnexion à votre serveur Node.js
      await fetch('http://your-server-url/logout', {
        method: 'POST',
      });

      // Effacer le JWT stocké localement (par exemple, dans AsyncStorage)

      console.log('Utilisateur déconnecté');
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Connexion" onPress={handleLogin} />
      <Button title="Déconnexion" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;