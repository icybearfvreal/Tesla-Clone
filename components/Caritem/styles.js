import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center', 
      },
      title: {
        fontSize: 40,
        fontWeight: '600',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
      },
      subtitle: {
        fontSize: 15,
        color: '#5c5e62'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      }
});

export default styles;