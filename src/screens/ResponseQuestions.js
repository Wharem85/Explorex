import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Platform,TouchableOpacity } from 'react-native';
import BackgroundGeneral from '../containers/BackgroundGeneral';
import { jerarquia } from '../utils/jerarquiaOperaciones'
import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';
import animationE from '../assets/animations/Estrellitas.json';
import animationTimer from '../assets/animations/timer_amarillo.json';
import ViewResults from './ViewResults';

export default function ResponseQuestions({setCoin, coin}) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [buttonStates, setButtonStates] = useState([
    { color: '#6AB1B5', image: null, correct: 0 },
    { color: '#6AB1B5', image: null, correct: 0 },
    { color: '#6AB1B5', image: null, correct: 0 },
    { color: '#6AB1B5', image: null, correct: 0 }
  ]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
	const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
	const [correctSound, setCorrectSound] = useState();
	const [incorrectSound, setIncorrectSound] = useState();
	const [viewRes, setViewRes] = useState(false);

  const lottieRef = useRef(null);
	const lottieRef2 = useRef(null);

	const progressWidth = ((currentQuestionIndex / 20) * 100);

  const handleNextQuestion = async () => {
		setButtonStates([
			{ color: '#6AB1B5', image: null, correct: 0 },
			{ color: '#6AB1B5', image: null, correct: 0 },
			{ color: '#6AB1B5', image: null, correct: 0 },
			{ color: '#6AB1B5', image: null, correct: 0 }
  	])
		setButtonDisabled(false);
		lottieRef.current?.reset();
    lottieRef.current?.play();
    if (currentQuestionIndex < jerarquia.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
			setCoin(`000${correctCount * 5}`)
			setViewRes(true);
    }
  };

  const currentQuestion = jerarquia[currentQuestionIndex];

	const viewAnswer = (id, answer, posibbleAnswer) => {
		const newButtonStates = [...buttonStates];
    if (answer == posibbleAnswer) {
      newButtonStates[id] = { color: '#6FBA3B', image: null, correct: 1 };
			playCorrectSound();
			lottieRef2.current?.reset();
      lottieRef2.current?.play();
			setCorrectCount(correctCount + 1);
    } else {
			const correctIndex = currentQuestion.answers.findIndex((question,i) =>  {
				if (question == answer) {
					return i
				}
			});
      newButtonStates[correctIndex] = { ...newButtonStates[correctIndex], image: require('../assets/img/check.png') };
			newButtonStates[id] = { color: '#E4323C', image: null };
			playIncorrectSound()
			setIncorrectCount(incorrectCount + 1);
    }
    setButtonStates(newButtonStates);
		setButtonDisabled(true)
	}

	useEffect(() => {
		const loadSounds = async () => {
			const correctSoundObject = new Audio.Sound();
			const incorrectSoundObject = new Audio.Sound();

			try {
				await correctSoundObject.loadAsync(require('../assets/sounds/RespuestaCorrecta.mp3'));
				await incorrectSoundObject.loadAsync(require('../assets/sounds/RespuestaIncorrecta.mp3'));
				setCorrectSound(correctSoundObject);
				setIncorrectSound(incorrectSoundObject);
			} catch (error) {
				console.error('Error loading sound', error);
			}
		};

		loadSounds();

		return () => {
			if (correctSound) {
				correctSound.unloadAsync();
			}
			if (incorrectSound) {
				incorrectSound.unloadAsync();
			}
		};
	}, []);


	const playCorrectSound = async () => {
		try {
			await correctSound.replayAsync();
		} catch (error) {
			console.error('Error playing correct sound', error);
		}
	};

	const playIncorrectSound = async () => {
		try {
			await incorrectSound.replayAsync();
		} catch (error) {
			console.error('Error playing incorrect sound', error);
		}
	};

	const renderQuestionText = (question) => {
    if (question.includes('__')) {
      const [part1, part2] = question.split('__');
      return (
        <View style={styles.questionTextContainer}>
          <Text style={styles.questionText}>
						{part1}
						<Image
							source={require('../assets/img/QuestionMark.png')}
							resizeMode="stretch"
							style={styles.questionMark}
						/>
						{part2}
					</Text>
        </View>
      );
    } else if (question.includes('=')) {
			return (
        <View style={styles.questionTextContainer}>
          <Text style={styles.questionText}>
						{`${question} `}
						<Image
							source={require('../assets/img/QuestionMark.png')}
							resizeMode="stretch"
							style={styles.questionMark}
						/>
					</Text>
        </View>
      );
		} else {
      return (
        <View style={styles.questionTextContainer}>
          <Text style={styles.questionText}>
						{question}
					</Text>
        </View>
      );
    }
  };

  return (
		<BackgroundGeneral coin={coin}>
			{!viewRes &&
			<>
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
				{(Platform.OS === 'android' || Platform.OS == 'ios') &&
					<LottieView
						ref={lottieRef}
						source={animationTimer}
						autoPlay
						loop
						style={[styles.animationTimer]}
					/>
				}
				<View style={styles.container}>
					<Text style={styles.levelText}>Nivel {currentQuestionIndex + 1}/20</Text>
					<View style={styles.centerBar}>
						<View style={styles.progressBarBackground}>
							<Image source={require('../assets/img/BarraProgresoNaranja.png')} style={[styles.progressBarFill, { width: `${progressWidth + 5}%` }]} />
						</View>
					</View>
				</View>
				{(Platform.OS === 'android' || Platform.OS == 'ios') &&
					<LottieView
						ref={lottieRef}
						source={animationE}
						autoPlay={false}
						loop={false}
						style={[styles.animation, {left: `${(progressWidth-8)}%`}]}
					/>
				}

				<View style={styles.questionContainer}>
					<View style={styles.containInstruction}>
						<Text style={styles.instrucion}>
							{currentQuestion.instruction}
						</Text>
					</View>
					{renderQuestionText(currentQuestion.question)}
				</View>
				<View style={styles.optionsContainer}>
					<View style={styles.row}>
						<TouchableOpacity disabled={buttonDisabled} style={[styles.buttonStyles, {backgroundColor: buttonStates[0].color}]} onPress={() => viewAnswer(0, currentQuestion.answer, currentQuestion.answers[0])}>
							<Text style={styles.textButton}>
								{currentQuestion.answers[0]}
							</Text>
							{buttonStates[0].image && (
								<Image source={buttonStates[0].image} style={styles.image} />
							)}
						</TouchableOpacity>
						<TouchableOpacity disabled={buttonDisabled} style={[styles.buttonStyles, {backgroundColor: buttonStates[1].color}]} onPress={() => viewAnswer(1, currentQuestion.answer, currentQuestion.answers[1])}>
							<Text style={styles.textButton}>
								{currentQuestion.answers[1]}
							</Text>
							{buttonStates[1].image && (
								<Image source={buttonStates[1].image} style={styles.image} />
							)}

						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity disabled={buttonDisabled} style={[styles.buttonStyles, {backgroundColor: buttonStates[2].color}]} onPress={() => viewAnswer(2, currentQuestion.answer, currentQuestion.answers[2])}>
							<Text style={styles.textButton}>
								{currentQuestion.answers[2]}
							</Text>
							{buttonStates[2].image && (
								<Image source={buttonStates[2].image} style={styles.image} />
							)}
						</TouchableOpacity>
						<TouchableOpacity disabled={buttonDisabled} style={[styles.buttonStyles, {backgroundColor: buttonStates[3].color}]} onPress={() => viewAnswer(3, currentQuestion.answer, currentQuestion.answers[3])}>
							<Text style={styles.textButton}>
								{currentQuestion.answers[3]}
							</Text>
							{buttonStates[3].image && (
								<Image source={buttonStates[3].image} style={styles.image} />
							)}
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.buttonNext} onPress={handleNextQuestion}>
						<Text style={styles.textButtonNext}>
							Siguiente
						</Text>
					</TouchableOpacity>
					<Text style={styles.report}>Reportar pregunta</Text>
				</View>
			</>
			}

			{viewRes &&
				<ViewResults incorrectCount={incorrectCount} setIncorrectCount={setIncorrectCount} correctCount={correctCount} setCorrectCount={setCorrectCount} />
			}
		</BackgroundGeneral>
  );
}

const styles = StyleSheet.create({
	questionTextContainer: {
    display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		width: '100%',
  },
  questionText: {
    fontSize: Platform.select({
			web: 28,
			default: 18
		}),
    fontWeight: 'bold',
    color: '#133362',
  },
	animation: {
		width: 200,
		height: 200,
		position: 'absolute',
		top: 100,
	},
	animationTimer: {
		width: 50,
		height: 50,
		position: 'absolute',
		top: 165,
		right: 0,
		zIndex: 10
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
			default: -30
		}),
		left: Platform.select({
			web: -20,
			default: -70
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
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
		width: Platform.select({
			web: '70%',
			default: '90%'
		}),
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
		marginLeft: 20,
		marginRight: 20,
  },
	instrucion: {
		fontSize: Platform.select({
			web: 24,
			default: 18
		}),
		textAlign: 'center'
	},
	questionMark: {
		width: 20,
		height: 30,
	},
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
		marginBottom: 10
  },
	row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
	image: {
		position: 'absolute',
		top: -15,
		right: -20,
		height: 35,
		width: 35,
	},
	buttonNext: {
		width: 150,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 10,
		display: 'flex',
		justifyContent: 'center'
	},
	textButtonNext: {
		color: '#083454',
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	buttonStyles: {
		height: 60,
		width: 170,
		borderRadius: 10,
		marginRight: 10,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center'
	},
	textButton: {
		color: 'white',
		textAlign: 'center',
		fontSize: 17,
		fontWeight: 'bold'
	},
  report: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
		marginTop: Platform.select({
			web: 20,
			default: 0
		}),
  },
});
