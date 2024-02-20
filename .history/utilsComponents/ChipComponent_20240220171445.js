import * as React from 'react';
import { Chip } from 'react-native-paper';

const ChipComponent = ({mode,icon, dataToShow}) => (
  <Chip mode={mode} icon={icon}>{dataToShow}</Chip>
);

export default ChipComponent;