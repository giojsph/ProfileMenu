import React from 'react';
import { TouchableOpacity, Text, View, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Updated for Expo icons
import styles from '../styles/SettingsStyles1';

const Settings = ({ title, iconName, showSwitch, value, onValueChange }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuIconContainer}>
      <Ionicons name={iconName} size={24} color="#000" />
    </View>
    <Text style={styles.menuText}>{title}</Text>
    {showSwitch ? (
      <Switch value={value} onValueChange={onValueChange} />
    ) : (
      <Ionicons name="chevron-forward" size={24} color="#ccc" />
    )}
  </TouchableOpacity>
);

export default Settings;
