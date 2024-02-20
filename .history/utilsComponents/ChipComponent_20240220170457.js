import * as React from 'react';
import { Chip } from 'react-native-paper';

const ChipComponent = ({mode,icon, onPress, dataToShow}) => (
  <Chip mode={mode} icon={icon} onPress={onPress}>${dataToShow}</Chip>
);

export default ChipComponent;