import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InterventionDeclarationScreen = () => {
  // États pour stocker les valeurs des champs du formulaire
  const [date, setDate] = useState('');
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    // Implémentez ici la logique pour sauvegarder les détails de l'intervention
    console.log('Date:', date);
    console.log('Client:', client);
    console.log('Description:', description);
    // Réinitialisez les champs du formulaire après la soumission
    setDate('');
    setClient('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Déclaration d'intervention</Text>

      {/* Champ de saisie pour la date */}
      <TextInput
        style={styles.input}
        placeholder="Date de l'intervention"
        value={date}
        onChangeText={text => setDate(text)}
      />

      {/* Champ de saisie pour le nom du client */}
      <TextInput
        style={styles.input}
        placeholder="Nom du client"
        value={client}
        onChangeText={text => setClient(text)}
      />

      {/* Champ de saisie pour la description de l'intervention */}
      <TextInput
        style={styles.input}
        placeholder="Description de l'intervention"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={text => setDescription(text)}
      />

      {/* Bouton de soumission du formulaire */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enregistrer</Text>
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
    backgroundColor: '#add8e6', // Couleur bleue pour le bouton
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
});

export default InterventionDeclarationScreen;
