import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  userInfo: {},

  name: {
    fontSize: 14,
    color: '#000',
  },

  place: {
    color: '#666',
    fontSize: 12,
    marginTop: 2,
  },

  image: {
    height: 400,
    marginVertical: 15,
    width: '100%',
  },

  footer: {
    paddingHorizontal: 15,
  },

  actions: {
    flexDirection: 'row',
  },

  action: {
    marginRight: 8,
  },

  likes: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#000',
  },

  description: {
    lineHeight: 18,
    color: '#000',
  },

  hashtags: {
    color: '#7159c1',
  },
});
