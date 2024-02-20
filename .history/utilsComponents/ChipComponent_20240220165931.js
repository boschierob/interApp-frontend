import * as React from 'react';
import { Chip } from 'react-native-paper';

const MyComponent = ({information, onPress, dataToShow}) => (
  <Chip icon={information} onPress={onPress}>${dataToShow}</Chip>
);

export default MyComponent;