import { View, StyleSheet, Image, Platform } from 'react-native';

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
    top: 20,
    left: 0,
  },
  circle: {
  },
  moon: {
    height: Platform.select({
      web: 150,
      default: 100
    }),
		width: Platform.select({
      web: 150,
      default: 100
    }),
		position: 'absolute',
  },
});
