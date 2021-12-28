import ms from 'ms';

const map = {
	s: 'seconds',
	ms: 'milliseconds',
	m: 'minutes',
	h: 'hours',
	d: 'days'
};

export const timeAgo = (date) =>
	date ? ms(new Date() - date).replace(/[a-z]+/, (str) => ' ' + map[str]) : '';
