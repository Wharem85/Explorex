import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import animationD from '../assets/animations/D_con_fuego.json';
import BackgroundGeneral from '../containers/BackgroundGeneral';

export default function Home({ navigation, coin }) {
	const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

	const changeScreen = () => {
		navigation.navigate('responseQuestions')
	}

  return (
		<BackgroundGeneral coin={coin}>
			{(Platform.OS === 'android' || Platform.OS == 'ios') &&
				<LottieView
					ref={lottieRef}
					source={animationD}
					autoPlay
					loop={false}
					style={styles.animation}
				/>
			}
			{Platform.OS === 'web' &&
				<Image
					source={require('../assets/img/pantalla_puntos/DconGlow.png')}
					resizeMode='contain'
					style={[styles.circle, styles.cohete]}
				/>
			}
			{Platform.OS === 'web' &&
				<Image
					source={require('../assets/img/pantalla_puntos/Llama.png')}
					style={[styles.circle, styles.llama]}
					resizeMode='contain'
				/>
			}
			<Image source={require('../assets/img/circulos_pantallas/Circulo-amarillo-largo.png')}
				resizeMode="cover"
				style={[styles.circle, styles.backYellow2]}
			/>
			<View style={styles.contentPrincipal}>
				<ImageBackground
					source={require('../assets/img/pantalla_puntos/cuadroPunteo.png')}
					resizeMode="cover"
					style={styles.contentPrincipal2}>
					<View>
						<Text style={styles.textPrin}>
							¡Desafíate!
						</Text>
					</View>
					<Image
						source={require('../assets/img/Línea_título.png')}
						resizeMode="cover"
						style={styles.lineaTitle}
					/>
					<View style={styles.contentTextSec}>
						<Text style={styles.textSec}>
							Supera estos desafíos y empieza a completar la misión de:
						</Text>
						<Text style={styles.textSec2}>
							Jerarquía de operaciones
						</Text>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.contentButton}>
				<TouchableOpacity style={styles.button} onPress={changeScreen}>
					<Text style={styles.buttonText}>
						¡Acepto el reto!
					</Text>
				</TouchableOpacity>
			</View>
			<Image source={require('../assets/img/circulos_pantallas/yellow-background.jpg')}
				resizeMode="cover"
				style={[styles.circle, styles.backYellow]}
			/>
			<Image source={require('../assets/img/Chanín.png')}
				style={[styles.circle, styles.chanin]}
			/>
		</BackgroundGeneral>
  );
}

const styles = StyleSheet.create({
	backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
		height: '100%'
  },
	contentPrincipal: {
		position: 'absolute',
		width: Platform.select({
			web: '60%',
			default: '90%'
		}),
		top: Platform.select({
			web: '20%',
			default: '28%'
		}),
		left: Platform.select({
			web: '20%',
			default: '5%'
		}),
		height: Platform.select({
			web: '100%',
		}),
		borderBottomWidth: 8,
    borderBottomColor: '#032E54',
    borderRadius: 15,
    overflow: 'hidden',
		zIndex: 19,
	},
	contentPrincipal2: {
		height: 320,
		display: 'flex',
		width: Platform.select({
			web: '100%'
		}),
		textAlign: 'center',
		alignItems: 'center',
	},
	contentTextSec: {
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center',
		textAlign: 'center',
		marginLeft: 42,
		marginRight: 42
	},
	textPrin: {
		color: 'white',
		marginTop: 20,
		fontSize: 50,
		fontFamily: "sans-serif",
		fontWeight: '800'
	},
	textSec: {
		color: 'white',
		marginTop: 20,
		fontSize: 25,
		fontFamily: "sans-serif",
		fontWeight: '600',
		textAlign: 'center'
	},
	textSec2: {
		color: 'white',
		fontSize: 25,
		fontFamily: "sans-serif",
		fontWeight: 'bold',
		textAlign: 'center'
	},
	backYellow: {
		height: Platform.select({
			web: 350,
			default: 200
		}),
		width: Platform.select({
			web: '50%',
			default: '42%'
		}),
		position: 'absolute',
		bottom: Platform.select({
			web: 0,
			default: 20
		}),
		left: Platform.select({
			web: -650,
		}),
		borderTopRightRadius: 300,
		zIndex: 1
	},
	chanin: {
		flex: 1,
    resizeMode: Platform.select({
			default: 'contain'
		}),
		height: Platform.select({
			web: 650,
			default: 300
		}),
		position: 'absolute',
		bottom: Platform.select({
			web: 20,
			default: 40
		}),
		left: Platform.select({
			web: 0,
			default: -80
		}),
		zIndex: 20
	},
	animation: {
		width: 750,
		height: 750,
		position: 'absolute',
		top: 50,
		left: -200,
		zIndex: 21
	},
	contentButton: {
		marginTop: 20,
		width: 190,
		borderRadius: 15,
		backgroundColor: '#8D8D8D',
		height: 55,
		position: 'absolute',
		top: Platform.select({
			web: '40%',
			default: '56%'
		}),
		left: Platform.select({
			web: '45%',
			default: '25%'
		}),
		zIndex: 22
	},
	button: {
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		height: 50,
    borderRadius: 15,

	},
	buttonText: {
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: "Roboto",
		color: '#133362',
		fontSize: 18,
		fontWeight: '800'
	},
	backYellow2: {
		flex: 1,
		display: Platform.select({
			web: 'none',
		}),
		resizeMode: 'stretch',
		position: 'absolute',
		top: -80,
		left: -730,
		borderTopRightRadius: 300,
		zIndex: 20,
		transform: [{ rotate: '-10deg' }]
	},
	cohete: {
		position: 'absolute',
		top: 60,
		left: Platform.select({
			web: '21%',
			default: '22%'
		}),
		width: 200,
		height: 200,
		zIndex: 23
	},
	llama: {
		position: 'absolute',
		top: 78,
		left: '13%',
		width: 190,
		height: 190,
		zIndex: 22
	}
});
