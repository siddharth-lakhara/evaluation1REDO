
function roll (scoreArray){
	let retArray = [];
	let loop = 0;  // number of times loop runs should not exceed 10
	if (validatePins(scoreArray)){
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
	}

	let totalScore = retArray.reduce((prev,curr)=> prev+curr, 0);
	return totalScore;
}

function validatePins(input){
	// First check whether all input element is positive number
	let inputVerified = input.map((elem)=>{
		if (typeof elem === 'number'){
			if (elem >= 0)
				return elem;
		}
	});

	if (inputVerified.length != input.length)
		return false; // input not a positive number

	// even frames => correct input
	if (input.length % 2 === 0){
		return true;
	}

	// otherwise combination of spare and strikes are present
	let v1 = false; // validation 1 for number of strikes
	let v2 = false; // validation 2 for spare at the end

	{
		let arr10 = input.reduce((prev, curr)=> {
			if (curr === 10)
				prev++;
		}, 0);

		if (arr10 % 2 != 0)
			v1 = true;
	}

	{
		let len = input.length;

		if (input[len-1] + input[len-2] === 10) // spare at end is present
			v2 = true;
	}

	return v1 || v2;
}

module.exports = roll;
