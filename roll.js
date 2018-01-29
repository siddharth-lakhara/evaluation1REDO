
function roll (scoreArray){
	let totalScore = scoreArray.reduce((prev,curr)=> prev+curr, 0);
	return totalScore;
}

module.exports = roll;
