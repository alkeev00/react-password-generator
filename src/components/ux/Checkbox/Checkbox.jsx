import React from 'react'
import styles from './Checkbox.module.css'
import { GoCheck } from 'react-icons/go'
import { HiOutlineCheck } from 'react-icons/hi'

const Checkbox = ({ title, onChange, checked, disabled }) => {
	return (
		<label className={styles.checkboxArea}>
			<p className={styles.title}>{title}</p>
			<span className={styles.check}>
				<input
					className={styles.checkmark}
					type='checkbox'
					onChange={onChange}
					checked={checked}
					disabled={disabled}
				/>
				<div className={styles.checkIcon}>
					{checked ? <HiOutlineCheck /> : ''}
				</div>
			</span>
		</label>
	)
}

export default Checkbox
