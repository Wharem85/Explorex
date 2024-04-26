import { View, StyleSheet, Image } from 'react-native';

export default function Moon() {
  return (
		<View style={styles.container}>
			<Image source={require('../assets/img/PlanetaAritmética.png')}
				resizeMode="cover"
				style={[styles.moon]}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    position: 'absolute',
    top: 30,
    left: 0,
  },
  circle: {
  },
  moon: {
    height: 100,
		width: 100,
		position: 'absolute',

  },
});
