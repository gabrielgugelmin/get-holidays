import HolidaysClass from 'date-holidays';

function Holiday(...data) {
	const hd = new HolidaysClass(...data);
	return hd;
}

export default Holiday;
