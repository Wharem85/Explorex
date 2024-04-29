import { View, StyleSheet, Platform, Image } from 'react-native';

export default function BackgroundCircles() {
  return (
		<View style={styles.container}>
			<Image source={require('../assets/img/circulos_pantallas/Círculo-morado-2.png')}
				resizeMode="cover"
				style={[styles.circle, styles.small]}
			/>
			<Image source={require('../assets/img/circulos_pantallas/Círculo-morado-3.png')}
				resizeMode="cover"
				style={[styles.circle, styles.medium]}
			/>
			<Image source={require('../assets/img/circulos_pantallas/Círculo-morado-4.png')}
				resizeMode="cover"
				style={[styles.circle, styles.large]}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  small: {
    height: Platform.select({
			web: 1300,
			default: 260
		}), // circulo grande
		width: '100%',
		position: 'absolute',
		bottom: Platform.select({
			web: -950,
			default: -70
		}),
  },
  medium: {
    height: Platform.select({
			web: 1300,
			default: 260
		}), // Circulo mediano
		width: '100%',
		position: 'absolute',
		bottom: Platform.select({
			web: -1060,
			default: -120
		}),
  },
  large: {
    height: Platform.select({
			web: 1300,
			default: 260
		}),  // Circulo pequeña
		width: '100%',
		position: 'absolute',
		bottom: Platform.select({
			web: -1100,
			default: -160
		}),
  },
	backYellow: {
		height: 280, // Altura pequeña
		width: '55%',
		position: 'absolute',
		bottom: 30,
		borderTopRightRadius: 300,
		zIndex: 1
	}
});
