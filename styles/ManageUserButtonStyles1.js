import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIconContainer: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
});
