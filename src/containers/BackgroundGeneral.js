import { StyleSheet, ImageBackground, Platform } from 'react-native';
import Moon from '../components/Moon';
import TabsBottom from '../components/TabsBottom';
import BackgroundCircles from '../components/BackgroundCirlculs';

export default function BackgroundGeneral({children}) {
  return (
		<ImageBackground
      source={require('../assets/img/background-general.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
			<BackgroundCircles />
			<TabsBottom />
			<Moon />
			{children}
		</ImageBackground>
  );
}

const styles = StyleSheet.create({
	backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
		height: '100%',
		width: Platform.select({
			web: '100%'
		})
  }
});

