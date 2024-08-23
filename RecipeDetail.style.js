import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c11313',
    marginBottom: 10,
    textAlign: 'left',
  },
  title_area:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c11313',
    marginBottom: 10,
    marginTop:-5,
    textAlign: 'left',
  },
  instructions: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  linkButtonContainer: {
    alignItems: 'center',
  },
  linkButton: {
    backgroundColor: 'red',
    padding: 12,
    marginBottom:25,
    marginTop:3,
    borderRadius: 9,
    marginHorizontal: 5,
    alignSelf: 'stretch',
  },
  linkButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  
});

export default styles;
