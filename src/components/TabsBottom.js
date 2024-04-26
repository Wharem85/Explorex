import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TabsBottom() {
  return (
		<View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/home.png')} style={styles.centerImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/store.png')} style={styles.centerImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerButton}>
        <Image source={require('../assets/img/LogoParaFondosOscuros_ExploraxV2-0.png')} style={styles.centerImage2} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/chest.png')} style={styles.centerImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/ranking.png')} style={styles.centerImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#083454',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 70,
		borderEndStartRadius: 100,
		borderTopLeftRadius: 70,
		height: 80,
		zIndex: 50
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButton: {
    width: 120,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    width: 45,
    height: 40,
		borderRadius: 9,
		marginTop: 10
  },
	centerImage2: {
		width: 110,
    height: 70,
		borderRadius: 9,
	},
	backgroundImage: {
		flex: 1,
    resizeMode: 'cover',
		height: 300
	},
	backgroundColors: {
		position: 'absolute',
		bottom: 100
	}
});
