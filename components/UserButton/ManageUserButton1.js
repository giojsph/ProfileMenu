import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Updated for Expo icons
import styles from './'
const ManageUserButton = () => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuIconContainer}>
      <Ionicons name="person-circle-outline" size={24} color="#000" />
    </View>
    <Text style={styles.menuText}>Manage user</Text>
    <Ionicons name="chevron-forward" size={24} color="#ccc" />
  </TouchableOpacity>
);

export default ManageUserButton;
