
function roll (scoreArray){
	let retArray = [];
	let loop = 0;  // number of times loop runs should not exceed 10
	for (let i=0; loop < 10; loop+=1, i += 2){
		if (scoreArray[i] + scoreArray[i+1] > 10){ // strike
			retArray.push(10 + scoreArray[i+1] + scoreArray[i+2]);
			i -= 1; // so that one frame is not missed
		}

		else if (scoreArray[i] + scoreArray[i+1] === 10){ // spare or strike followed by zero
			if (scoreArray[i+1] === 0){ // strike followed by zero
				retArray.push(10 + scoreArray[i+1] + scoreArray[i+2]);
				i -= 1; // so that one frame is not missed
			}
			else{ // spare
				retArray.push(10 + scoreArray[i+2]);
			}
		}

		else{
			retArray.push(scoreArray[i] + scoreArray[i+1]);
		}

	}

	let totalScore = retArray.reduce((prev,curr)=> prev+curr, 0);
	return totalScore;
}

module.exports = roll;
