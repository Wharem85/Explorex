import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import TabsBottom from '../components/TabsBottom';
import BackgroundCircles from '../components/BackgroundCirlculs';
import Moon from '../components/Moon';

export default function Home() {
  return (
		<ImageBackground
      source={require('../assets/img/background-general.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
			<View style={styles.container}>
				<Image source={require('../assets/img/moneda.png')} style={styles.coin} />
      	<Text style={styles.score}>000000</Text>
				<View style={styles.arrowDownCont}>
					<Image source={require('../assets/img/arrowup.png')} style={styles.arrowDown} />
				</View>
			</View>
			<BackgroundCircles />
			<TabsBottom />
			<Moon />
		</ImageBackground>
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
	}
});
