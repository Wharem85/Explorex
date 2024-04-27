import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import BackgroundGeneral from '../containers/BackgroundGeneral';

export default function ResponseQuestions() {
  return (
		<BackgroundGeneral>
			<Image source={require('../assets/img/Chanín.png')}
				style={[styles.circle, styles.chanin]}
			/>
		</BackgroundGeneral>
  );
}

const styles = StyleSheet.create({
	chanin: {
		flex: 1,
    resizeMode: Platform.select({
			default: 'contain'
		}),
		height: Platform.select({
			web: 500,
			default: 300
		}),
		position: 'absolute',
		bottom: 40,
		left: Platform.select({
			web: -20,
			default: -80
		}),
		zIndex: 20
	},
});
