import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    try {
        await logout(); // Appel à la fonction de déconnexion
        navigation.navigate('Login'); // Redirection vers la page de connexion après la déconnexion
      } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Êtes-vous sûr de vouloir vous déconnecter ?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#dc3545', // Couleur rouge pour le bouton de déconnexion
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LogoutScreen;
