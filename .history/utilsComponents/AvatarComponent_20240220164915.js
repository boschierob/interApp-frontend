import * as React from 'react';
import { Avatar } from 'react-native-paper';

const MyAvatar = () => (
  <Avatar.Image size={24} source={require('../assets/avatar.png')} />
);
export default MyAvatar