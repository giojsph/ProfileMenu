import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/SignoutStyles1';

const SignOutButton = () => (
  <TouchableOpacity style={styles.signOutButton}>
    <Text style={styles.signOutText}>Sign Out</Text>
  </TouchableOpacity>
);

export default SignOutButton;
