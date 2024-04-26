import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Awards() {
  return (
    <ImageBackground
      source={require('../assets/img/background-general.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
				<View style={styles.container}>
					<Text>Openasd up App.js to start working on your app!</Text>
					<StatusBar style="auto" />
				</View>
			</ImageBackground>
  );
}

const styles = StyleSheet.create({
	backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Opcional, dependiendo de cómo quieras que se vea la imagen de fondo
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
