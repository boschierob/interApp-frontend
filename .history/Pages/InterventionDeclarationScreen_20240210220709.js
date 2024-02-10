import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const InterventionDeclarationScreen = (route) => {
  const { userEmail } = route.params;
  // État pour stocker les déclarations d'intervention
  const [interventions, setInterventions] = useState([]);
  
  // États pour les champs du formulaire
  const [date, setDate] = useState('');
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    // Ajouter la nouvelle déclaration à la liste des interventions
    const newIntervention = { id: interventions.length + 1, date, client, description };
    setInterventions([...interventions, newIntervention]);

    // Réinitialiser les champs du formulaire après la soumission
    setDate('');
    setClient('');
    setDescription('');
  };

  // Fonction pour supprimer une déclaration d'intervention
  const handleDelete = (id) => {
    setInterventions(interventions.filter(intervention => intervention.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userEmail}</Text>
      
      <Text style={styles.title}>Déclaration d'intervention</Text>

      {/* Formulaire de déclaration d'intervention */}
      <TextInput
        style={styles.input}
        placeholder="Date de l'intervention"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom du client"
        value={client}
        onChangeText={text => setClient(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description de l'intervention"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>

      {/* Liste des anciennes déclarations d'interventions */}
      <Text style={styles.subtitle}>Anciennes déclarations :</Text>
      <FlatList
        data={interventions}
        renderItem={({ item }) => (
          <View style={styles.interventionItem}>
            <Text>Date: {item.date}</Text>
            <Text>Client: {item.client}</Text>
            <Text>Description: {item.description}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
              <Text style={styles.buttonText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
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
  interventionItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#ffc107', // Couleur jaune pour le bouton Modifier
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Couleur rouge pour le bouton Supprimer
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default InterventionDeclarationScreen;