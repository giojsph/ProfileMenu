import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/ProfileImageStyles1';

const ProfileImage = () => (
  <View style={styles.profileSection}>
    <Image
      style={styles.profileImage}
      source={{ uri: 'assets/Profilepic.png' }} 
    />
    <View>
      <Text style={styles.nameText}>David Robinson</Text>
      <Text style={styles.joinedText}>Joined 1 year ago</Text>
    </View>
  </View>
);

export default ProfileImage;
