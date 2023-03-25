import { StyleSheet } from 'react-native';

export const woofPostStyles = StyleSheet.create({
  layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
  },
  image: {
    width: 112,
    height: 80,
    borderRadius: 12,
    flex: 1
  },
  content: {
    flex: 2,
    padding: 12
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4,
    color: '#280D5F'
  },
});