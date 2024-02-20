import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
import MyAvatar from '../utilsComponents/AvatarComponent';
import ChipComponent from '../utilsComponents/ChipComponent';
import DatePickerComponent from '../utilsComponents/DatePickerComponent';
import CustomerPicker from '../utilsComponents/CustomerPicker';

const InterventionDeclarationScreen = () => {
  const route = useRoute();
  // Accédez aux paramètres à partir de route.params
  const { userEmail } = route.params;

  // Définir un état pour stocker les données de l'utilisateur
  const [userData, setUserData] = useState(null);
  // Définir un état pour indiquer si les données sont en cours de chargement
  const [isLoading, setIsLoading] = useState(true);
  // État pour stocker les déclarations d'intervention
  const [interventions, setInterventions] = useState([]);

  // États pour les champs du formulaire
  const [selectedValue, setSelectedValue ] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');


  const onValueChange = (value) => {
    setSelectedValue(value)
  }
  
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

  // Fonction pour récupérer les données de l'utilisateur depuis le serveur
  const fetchUserData = async () => {
    const storedToken = await AsyncStorage.getItem('jwtToken')
    console.log(`stored token : ${storedToken}`);
    try {
      // Faire l'appel vers l'endpoint sécurisé sur le serveur pour récupérer les données de l'utilisateur
      const response = await fetch('https://interapi-odap.onrender.com/auth-endpoint', {
        method: 'GET',
        headers: {
          // Inclure le JWT dans les en-têtes pour authentifier la requête
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données utilisateur');
      }

      // Convertir la réponse en JSON
      const data = await response.json();
      // Mettre à jour l'état avec les données de l'utilisateur
      setUserData(data);
      console.log(userData);
      // Marquer le chargement comme terminé
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error);
      // Gérer l'erreur, par exemple afficher un message à l'utilisateur
    }
  };


  // Fonction pour supprimer une déclaration d'intervention
  const handleDelete = (id) => {
    setInterventions(interventions.filter(intervention => intervention.id !== id));
  };

  // Appeler fetchUserData une seule fois au moment du montage du composant
  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MyAvatar />
      <Text style={styles.title}>Bonjour {userData.username}</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {userData ? (
          <>
          <ChipComponent mode='flat' icon='information' dataToShow={userData.username}/>
          <ChipComponent mode='flat' icon='mdiEmailOpen ' dataToShow={userData.statut}/>
          <ChipComponent mode='flat' icon='information' dataToShow={userData.email}/>
              {/* Afficher d'autres informations de l'utilisateur si nécessaire */}
          </>
        ) : (
          <Text>Aucune donnée utilisateur disponible</Text>
        )}
      </View>

      <Text style={styles.title}>Déclaration d'intervention</Text>

      {/* Formulaire de déclaration d'intervention */}
      <CustomerPicker selectedValue={selectedValue} onValueChange={onValueChange} customersArray={userData.customers}/>
      
      <Text>{selectedValue!== null && (`Nom du client : ${selectedValue}`)}</Text>
      <Text style={styles.label}>Date de l'intervention :</Text>
      <DatePickerComponent />
      <Text 
      style={styles.selectedDate}>{selectedDate.toLocaleDateString()}
      </Text>
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