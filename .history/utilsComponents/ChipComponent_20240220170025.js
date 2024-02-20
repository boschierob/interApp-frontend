import * as React from 'react';
import { Chip } from 'react-native-paper';

const ChipComponent = ({mode,information, onPress, dataToShow}) => (
  <Chip mode={mode} icon={information} onPress={onPress}>${dataToShow}</Chip>
);

export default ChipComponent;