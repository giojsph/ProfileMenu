import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/ProfileImageStyles1';

const ProfileImage = () => (
  <View style={styles.profileSection}>
    <Image
      style={styles.profileImage}
      source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} 
    />
    <View>
      <Text style={styles.nameText}>Gio Joseph</Text>
      <Text style={styles.joinedText}>Joined 1 year ago</Text>
    </View>
  </View>
);

export default ProfileImage;
