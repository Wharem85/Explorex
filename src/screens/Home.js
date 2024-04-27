import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import animationD from '../assets/animations/D_con_fuego_02.json';
import BackgroundGeneral from '../containers/BackgroundGeneral';

export default function Home() {
	const lottieRef = useRef(null);

  useEffect(() => {
    // Iniciar la animación en un loop
    lottieRef.current.play(0, true);

    // Detener la animación cuando se desmonte el componente
    return () => {
      lottieRef.current.reset();
    };
  }, []);

  return (
		<BackgroundGeneral>
			<View style={styles.container}>
				<Image source={require('../assets/img/moneda.png')} style={styles.coin} />
      	<Text style={styles.score}>000000</Text>
				<View style={styles.arrowDownCont}>
					<Image source={require('../assets/img/arrowup.png')} style={styles.arrowDown} />
				</View>
			</View>
			<LottieView
				ref={lottieRef}
				source={animationD}
				autoPlay
				loop
				style={styles.animation}
			/>
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
					<View style={styles.contentButton}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>
								¡Acepto el reto!
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
			<Image source={require('../assets/img/circulos_pantallas/yellow-background.jpg')}
				resizeMode="cover"
				style={[styles.circle, styles.backYellow]}
			/>
			<Image source={require('../assets/img/Chanín.png')}
				resizeMode="cover"
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
  container: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
	coin: {
    width: 42, // Ajusta el ancho de la moneda según sea necesario
    height: 42,
		zIndex: 10
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
		backgroundColor: '#083454',
		height: 30,
		width: 80,
		borderRadius: 100,
		paddingLeft: 10,
		marginLeft: -10
  },
	arrowDownCont: {
		height: 50,
		width: 45,
		marginTop: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	arrowDown: {
		width: 35,
		height: 35,
		borderRadius: 10
	},
	contentPrincipal: {
		position: 'absolute',
		width: '90%',
		top: '28%',
		left: '5%',
		borderBottomWidth: 8,
    borderBottomColor: '#032E54',
    borderRadius: 15,
    overflow: 'hidden',
		zIndex: 19,
	},
	contentPrincipal2: {
		height: 330,
		display: 'flex',
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
		fontWeight: '700',
		textAlign: 'center'
	},
	textSec2: {
		color: 'white',
		fontSize: 25,
		fontFamily: "sans-serif",
		fontWeight: '800',
		textAlign: 'center'
	},
	backYellow: {
		height: 200,
		width: '42%',
		position: 'absolute',
		bottom: 30,
		borderTopRightRadius: 300,
		zIndex: 1
	},
	chanin: {
		flex: 1,
    resizeMode: 'contain',
		height: 300,
		position: 'absolute',
		bottom: 40,
		left: -80,
		zIndex: 20
	},
	animation: {
		width: 200,
		height: 200,
		position: 'absolute',
		top: 100,
		zIndex: 21
	},
	contentButton: {
		marginTop: 20,
		width: 190,
		borderRadius: 15,
		backgroundColor: '#8D8D8D',
		height: 55
	},
	button: {
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		height: 50,
    borderRadius: 15,
    overflow: 'hidden',
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
		resizeMode: 'stretch',
		position: 'absolute',
		top: -80,
		left: -730,
		borderTopRightRadius: 300,
		zIndex: 20,
		transform: [{ rotate: '-10deg' }]
	}
});
