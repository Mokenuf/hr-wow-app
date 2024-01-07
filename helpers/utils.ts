export const getRatingColor = (score: number): string => {
	if (score >= 0 && score < 400) {
		return '#9d9d9d'
	} else if (score >= 400 && score < 800) {
		return '#daffcb'
	} else if (score >= 800 && score < 1200) {
		return '#1eff00'
	} else if (score >= 1200 && score < 1600) {
		return '#4ce651'
	} else if (score >= 1600 && score < 2000) {
		return '#5fb692'
	} else if (score >= 2000 && score < 2400) {
		return '#4687c5'
	} else if (score >= 2400 && score < 2800) {
		return '#0070dd'
	} else if (score >= 2800 && score < 3200) {
		return '#b23ade'
	} else if (score >= 3200) {
		return '#ff8000'
	} else {
		return '#000000'
	}
}
export const getStatColor = (stat: string): string => {
	switch (stat) {
		case 'Health':
			return '#27cc4e'
		case 'Mana':
			return '#1c8aff'
		case 'Energy':
			return '#cb9501'
		case 'Rage':
			return '#ab0000'
		case 'Runic Power':
			return '#00bcde'
		case 'Focus':
			return '#d45719'
		case 'Maelstrom':
			return '#008fff'
		case 'Fury':
			return '#8400ff'
		case 'Insanity':
			return '#6600ff'
		case 'Strength':
			return '#f33232'
		case 'Agility':
			return '#ffd955'
		case 'Intellect':
			return '#d26cd1'
		case 'Stamina':
			return '#ff8b2d'
		case 'Crit':
			return '#e01c1c'
		case 'Haste':
			return '#0ed59b'
		case 'Mastery':
			return '#9256ff'
		case 'Vers':
			return '#bfbfbf'
		default:
			return '#000000'
	}
}
