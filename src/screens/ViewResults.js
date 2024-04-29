import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Platform, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import animationD from '../assets/animations/D_con_fuego_02.json';

export default function ViewResults({incorrectCount, setIncorrectCount, correctCount, setCorrectCount}) {
	const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play(0, -1);
    }
  }, []);

  return (
    <>
			{(Platform.OS === 'android' || Platform.OS == 'ios') &&
				<LottieView
					ref={lottieRef}
					source={animationD}
					autoPlay
					loop
					style={styles.animation}
				/>
			}
			{Platform.OS === 'web' &&
				<Image
					source={require('../assets/img/pantalla_puntos/DconGlow.png')}
					style={[styles.circle, styles.cohete]}
				/>
			}
			{Platform.OS === 'web' &&
				<Image
					source={require('../assets/img/pantalla_puntos/Llama.png')}
					style={[styles.circle, styles.llama]}
				/>
			}
			<View style={styles.titleCont}>
				<Text style={styles.textPrin}>
					¡Desafíate!
				</Text>
			</View>
			<Image
				source={require('../assets/img/Línea_título.png')}
				resizeMode="cover"
				style={styles.lineaTitle}
			/>
			<View style={styles.container}>
				<Text style={styles.levelText}>Nivel 20/20</Text>
				<View style={styles.centerBar}>
					<View style={styles.progressBarBackground}>
						<Image source={require('../assets/img/BarraProgresoNaranja.png')} style={[styles.progressBarFill, { width: `100%` }]} />
					</View>
				</View>
			</View>
			<Image source={require('../assets/img/Chanín.png')}
				style={[styles.circle, styles.chanin]}
			/>
			<View style={styles.contentPrincipal}>
				<ImageBackground
					source={require('../assets/img/pantalla_puntos/cuadroPunteo.png')}
					resizeMode="cover"
					style={styles.contentPrincipal2}>
					<View>
						<Text style={[styles.textPrin, styles.textPrin2]}>
							¡Buen Trabajo!
						</Text>
					</View>
					<View style={styles.container}>
						<View style={styles.statsContainer}>
							<ImageBackground
								source={require('../assets/img/pantalla_puntos/background_conteo_preguntas.png')}
								resizeMode="cover"
								style={[styles.statBox]}
							>
								<Image
									source={require('../assets/img/pantalla_puntos/estrella_preguntas.png')}
									resizeMode="stretch"
									style={[styles.starImg]}
								/>
								<Text style={styles.statNumber}>20</Text>
								<Text style={styles.statLabel}>Preguntas</Text>
							</ImageBackground>
							<ImageBackground
								source={require('../assets/img/pantalla_puntos/background_conteo_preguntas.png')}
								resizeMode="cover"
								style={[styles.statBox]}
							>
								<Image
									source={require('../assets/img/pantalla_puntos/estrella_correctas.png')}
									resizeMode="stretch"
									style={[styles.starImg]}
								/>
								<Text style={styles.statNumber}>{correctCount}</Text>
								<Text style={styles.statLabel}>Correctas</Text>
							</ImageBackground>
							<ImageBackground
								source={require('../assets/img/pantalla_puntos/background_conteo_preguntas.png')}
								resizeMode="cover"
								style={[styles.statBox]}
							>
								<Image
									source={require('../assets/img/pantalla_puntos/estrella_incorrectas.png')}
									resizeMode="stretch"
									style={[styles.starImg]}
								/>
								<Text style={styles.statNumber}>{incorrectCount}</Text>
								<Text style={styles.statLabel}>Incorrectas</Text>
							</ImageBackground>
						</View>
						<View style={styles.contentCoin}>
							<Text style={styles.coinsText}>Monedas obtenidas</Text>
							<ImageBackground
								source={require('../assets/img/pantalla_puntos/background_conteo_preguntas.png')}
								resizeMode="stretch"
								style={[styles.coinsContainer]}
							>
								<Image
									source={require('../assets/img/pantalla_puntos/Moneda.png')}
									resizeMode="stretch"
									style={[styles.coinImg]}
								/>
								<Animated.Text style={styles.coinsNumber}>{correctCount * 5}</Animated.Text>
							</ImageBackground>
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.contentButton}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>
						Iniciar mision #2
					</Text>
				</TouchableOpacity>
			</View>
		</>
  );
}

const styles = StyleSheet.create({
	animation: {
		width: 200,
		height: 200,
		position: 'absolute',
		top: 120,
		left: 90,
		zIndex: 20
	},
	cohete: {
		position: 'absolute',
		top: 60,
		left: Platform.select({
			web: '35%'
		}),
		width: 200,
		height: 200,
		zIndex: 23
	},
	llama: {
		position: 'absolute',
		top: 78,
		left: '28%',
		width: 190,
		height: 190,
		zIndex: 22
	},
	chanin: {
		flex: 1,
    resizeMode: Platform.select({
			default: 'contain'
		}),
		height: Platform.select({
			web: 450,
			default: 250
		}),
		position: 'absolute',
		bottom: Platform.select({
			web: 40,
			default: 80
		}),
		left: Platform.select({
			web: -20,
			default: -60
		}),
		zIndex: 20
	},
	textPrin: {
		color: 'white',
		fontSize: 35,
		fontFamily: "sans-serif",
		textAlign: 'center',
		fontWeight: '800',
	},
	textPrin2: {
		marginTop: 30,
		textShadowColor: 'black',
		fontSize: 45,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
	},
	titleCont: {
		marginTop: 100,
	},
	container: {
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden',
		width: '100%'
  },
  levelText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
    textAlign: 'left',
		marginLeft: 20
  },
	centerBar: {
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center',
		width: '90%',
		backgroundColor: '#8D8D8D',
		borderRadius: 20,
		height: 21,
	},
  progressBarBackground: {
    height: 20,
		marginTop: -4,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FFA500',
    borderRadius: 10,
  },
	contentPrincipal: {
		position: 'absolute',
		width: Platform.select({
			web: '70%',
			default: '90%'
		}),
		top: Platform.select({
			web: '25%',
			default: '28%'
		}),
		left: Platform.select({
			web: '15%',
			default: '5%'
		}),
		borderBottomWidth: 6,
    borderBottomColor: '#032E54',
    borderRadius: 15,
    overflow: 'hidden',
		zIndex: 19,
	},
	contentPrincipal2: {
		height: Platform.select({
			web: 420,
			default: 390
		}),
		display: 'flex',
		width: Platform.select({
			web: '100%'
		}),
		textAlign: 'center',
		alignItems: 'center',
	},
	contentButton: {
		marginTop: 10,
		width: 190,
		borderRadius: 15,
		backgroundColor: '#8D8D8D',
		height: 55,
		position: 'absolute',
		top: Platform.select({
			web: '72%',
			default: '65%'
		}),
		left: Platform.select({
			web: '45%',
			default: '26%'
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
		height: 90,
		marginTop: 20
  },
	starImg: {
		height: Platform.select({
			web: 80,
			default: 50
		}),
		width: Platform.select({
			web: 80,
			default: 50
		}),
		position: 'absolute',
		top: -30,
		zIndex: 20
	},
  statBox: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: Platform.select({
			web: 150,
			default: 90
		}),
  },
  statNumber: {
    color: '#133362',
    fontSize: Platform.select({
			web: 40,
			default: 30
		}),
		marginTop: Platform.select({
			web: 35,
			default: 0
		}),
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#133362',
    fontSize: Platform.select({
			web: 18,
			default: 12
		}),
  },
	contentCoin: {
		display: 'flex',
		justifyContnt: 'center',
		alignItems: 'center',
		marginTop: Platform.select({
			web: 70,
			default: 5
		}),
	},
  coinsContainer: {
		display: 'flex',
		justifyContnt: 'center',
		alignItem: 'center',
    borderRadius: 10,
		height: Platform.select({
			web: 85,
			default: 70
		}),
		width: Platform.select({
			web: 150,
			default: 120
		}),
  },
	coinImg: {
		width: 70,
		height: 70,
		position: 'absolute',
		left: -45
	},
  coinsText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  coinsNumber: {
    color: '#133362',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
		marginTop: Platform.select({
			web: 15,
			default: 5
		}),
  },
});
