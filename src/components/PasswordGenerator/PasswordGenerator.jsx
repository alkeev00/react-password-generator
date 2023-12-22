import React, { useState } from 'react'
import styles from './PasswordGenerator.module.css'
import { BsCopy } from 'react-icons/bs'
import Checkbox from '../ux/Checkbox/Checkbox'
import RangeSlider from '../ux/RangeSlider/RangeSlider'
import { characters } from '../../data/characters'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [lowerCase, setLowerCase] = useState(true)
	const [upperCase, setUpperCase] = useState(true)
	const [numbers, setNumbers] = useState(true)
	const [symbols, setSymbols] = useState(true)
	const [passwordLength, setPasswordLength] = useState(10)
	const [selectedChoices, setSelectedChoices] = useState([
		'lowercase',
		'uppercase',
		'numbers',
		'symbols',
	])
	const [isCopied, setIsCopied] = useState(false)

	const generatePassword = () => {
		let characterList = ''

		if (lowerCase) {
			characterList += characters.lowerCaseList
		}
		if (upperCase) {
			characterList += characters.upperCaseList
		}
		if (numbers) {
			characterList += characters.numbers
		}
		if (symbols) {
			characterList += characters.symbols
		}

		let tempPassword = ''
		const characterListLength = characterList.length

		for (let i = 0; i < passwordLength; i++) {
			const characterIndex = Math.round(Math.random() * characterListLength)
			tempPassword += characterList.charAt(characterIndex)
		}

		setPassword(tempPassword)
	}

	const handleCheckbox = type => {
		let tempChoices = selectedChoices
		if (tempChoices.includes(type)) {
			const index = tempChoices.indexOf(type)
			tempChoices.splice(index, 1)
		} else {
			tempChoices.push(type)
		}
		console.log(tempChoices)
		setSelectedChoices(tempChoices)
	}

	const copyPassword = () => {
		if (password.length > 0) {
			navigator.clipboard.writeText(password)
			setIsCopied(true)
			setTimeout(() => setIsCopied(false), 1000)
		}
	}

	return (
		<div className={styles.passwordGenerator}>
			<h1 className={styles.title}>Password Generator</h1>
			<div className={styles.wrapper}>
				<div className={styles.passwordArea}>
					<input
						className={styles.password}
						value={password}
						type='text'
						disabled
						placeholder='password'
					/>
					<div className={styles.copy}>
						<button className={styles.copyBtn} onClick={copyPassword}>
							<BsCopy />
						</button>
						{isCopied ? (
							<div className={styles.tooltip}>
								<p>Сopied</p>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<div className={styles.settings}>
				<div className={styles.slider}>
					<RangeSlider
						min={8}
						max={24}
						lengthValue={passwordLength}
						onChange={event => setPasswordLength(event.target.value)}
						defaultValue={passwordLength}
					/>
				</div>
				<div className={styles.checkboxes}>
					<Checkbox
						title={'Include Lowercase Letters'}
						onChange={() => {
							setLowerCase(!lowerCase)
							handleCheckbox('lowercase')
						}}
						disabled={
							selectedChoices.length === 1 &&
							selectedChoices.includes('lowercase')
						}
						checked={lowerCase}
					/>
					<Checkbox
						title={'Include Uppercase Letters'}
						onChange={() => {
							setUpperCase(!upperCase)
							handleCheckbox('uppercase')
						}}
						disabled={
							selectedChoices.length === 1 &&
							selectedChoices.includes('uppercase')
						}
						checked={upperCase}
					/>
					<Checkbox
						title={'Include Numbers'}
						onChange={() => {
							setNumbers(!numbers)
							handleCheckbox('numbers')
						}}
						disabled={
							selectedChoices.length === 1 &&
							selectedChoices.includes('numbers')
						}
						checked={numbers}
					/>
					<Checkbox
						title={'Include Symbols'}
						onChange={() => {
							setSymbols(!symbols)
							handleCheckbox('symbols')
						}}
						disabled={
							selectedChoices.length === 1 &&
							selectedChoices.includes('symbols')
						}
						checked={symbols}
					/>
				</div>
			</div>
			<button className={styles.generateBtn} onClick={generatePassword}>
				Generate
			</button>
		</div>
	)
}

export default PasswordGenerator
