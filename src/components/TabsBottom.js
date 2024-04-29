import { View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TabsBottom() {
  const navigation = useNavigation();
  
  return (
		<View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/home.png')} resizeMode='stretch' style={styles.centerImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/store.png')} resizeMode='stretch'  style={styles.centerImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('home')}>
        <Image source={require('../assets/img/LogoParaFondosOscuros_ExploraxV2-0.png')} resizeMode='stretch' style={styles.centerImage2} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/chest.png')} resizeMode='stretch'  style={styles.centerImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/img/ranking.png')} resizeMode='stretch'  style={styles.centerImage} />
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
		borderTopLeftRadius: 70,
		height: Platform.select({
			web: 115,
			default: 80
		}),
		zIndex: 50
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButton: {
    width: Platform.select({
			web: 120,
			default: 120
		}),
    height: Platform.select({
			web: 120,
			default: 100
		}),
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    width: Platform.select({
			web: 70,
			default: 45
		}),
    height: Platform.select({
			web: 65,
			default: 40
		}),
		borderRadius: 9,
		marginTop: 10
  },
	centerImage2: {
		width: Platform.select({
			web: 200,
			default: 110
		}),
    height: Platform.select({
			web: 120,
			default: 70
		}),
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
