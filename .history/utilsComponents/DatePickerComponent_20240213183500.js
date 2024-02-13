import React from 'react';
import { Platform, DatePickerIOS, Button, DatePickerAndroid } from 'react-native';

// Composant DatePicker spécifique à iOS
const DatePickerIOSComponent = ({ selectedDate, onDateChange }) => (
  <DatePickerIOS
    date={selectedDate}
    onDateChange={onDateChange}
    mode="date"
    style={{ width: '100%' }}
  />
);

// Composant DatePicker spécifique à Android
const DatePickerAndroidComponent = ({ selectedDate, onDateChange }) => {
  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: selectedDate,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        onDateChange(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <Button title="Sélectionner une date" onPress={showDatePicker} />
  );
};

// Composant cross-platforme de sélection de date
const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  return Platform.OS === 'ios' ? (
    <DatePickerIOSComponent selectedDate={selectedDate} onDateChange={onDateChange} />
  ) : (
    <DatePickerAndroidComponent selectedDate={selectedDate} onDateChange={onDateChange} />
  );
};

export default DatePickerComponent;