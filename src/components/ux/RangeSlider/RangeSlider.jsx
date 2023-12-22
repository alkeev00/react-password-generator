import React from 'react'
import styles from './RangeSlider.module.css'

const RangeSlider = ({ max, min, lengthValue, onChange, defaultValue }) => {
	return (
		<div className={styles.sliderSection}>
			<div className={styles.sliderInfo}>
				<p>Password Length:</p>
				<span className={styles.sliderValue}>{lengthValue}</span>
			</div>
			<input
				type='range'
				className={styles.slider}
				max={max}
				min={min}
				onChange={onChange}
				defaultValue={defaultValue}
			/>
		</div>
	)
}

export default RangeSlider
