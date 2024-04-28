import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Platform } from 'react-native';
import BackgroundGeneral from '../containers/BackgroundGeneral';
import { jerarquia } from '../utils/jerarquiaOperaciones'

export default function ResponseQuestions({ level, maxLevel }) {
	const progressWidth = (level / maxLevel) * 100;

  return (
		<BackgroundGeneral>
			<Image source={require('../assets/img/Chanín.png')}
				style={[styles.circle, styles.chanin]}
			/>
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
      	<Text style={styles.levelText}>Nivel {level}/{maxLevel}</Text>
				<View style={styles.centerBar}>
					<View style={styles.progressBarBackground}>
						<View style={[styles.progressBarFill, { width: `${progressWidth}%` }]} />
					</View>
				</View>
    	</View>

			{jerarquia.map((questions) => (
				<View style={styles.questionContainer}>
					<View>
						<Text>
							{questions.instruction}
						</Text>
						<Text>
							{questions.help}
						</Text>
						<Text>
							{questions.help2}
						</Text>
						<Text>
							{questions.help3}
						</Text>
					</View>
					<View>
						<Text style={styles.question}>
							{questions.question}
						</Text>
						<Image
							source={require('../assets/img/QuestionMark.png')}
							resizeMode="cover"
							style={styles.questionMark}
						/>
					</View>
					<View style={styles.optionsContainer}>
						<Button title="21" color="#48BB78" />
						<Button title="10" color="#48BB78" />
						<Button title="17" color="#34D399" />
						<Button title="13" color="#48BB78" />
					</View>
				</View>
			))}

			<View style={styles.buttonContainer}>
        <Text style={styles.report}>Reportar pregunta</Text>
      </View>
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
	textPrin: {
		color: 'white',
		fontSize: 35,
		fontFamily: "sans-serif",
		textAlign: 'center',
		fontWeight: '800'
	},
	titleCont: {
		marginTop: 120,
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
    marginBottom: 5,
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
	questionContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  question: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#133362',
  },
	questionMark: {
		width: 30,
		height: 40
	},
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  report: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
});
