import React from 'react';
import { View, Text } from 'react-native';
import ProfileImage from './components/ProfileImage1';
import ManageUserButton from './components/ManageUserButton';
import SettingsItem from './components/Settings1';
import SignOutButton from './components/SignOutButton1';
import styles from './styles/ProfileMenuStyles1';

const ProfileMenu = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      <ProfileImage />
      <ManageUserButton />
      
      <Text style={styles.sectionTitle}>Settings</Text>
      
      <SettingsItem title="Notifications" iconName="notifications-outline" showSwitch={false} />
      <SettingsItem 
        title="Dark Mode" 
        iconName="moon-outline" 
        showSwitch={true} 
        value={darkMode} 
        onValueChange={() => setDarkMode(!darkMode)} 
      />
      
      <SignOutButton />
    </View>
  );
};

export default ProfileMenu;
