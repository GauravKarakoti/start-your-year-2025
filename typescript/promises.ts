/*
 * Handrolled version of setTimeOut.
 */
const customSetTimeOut1 = (x: number) =>
	new Promise((resolve, reject) => {

		const currentTime = new Date();
		const previousSeconds = currentTime.getTime();
		const fullFilledSeconds = previousSeconds + (x * 1000);

		let newTime = new Date();
		do {
			newTime = new Date();
		} while (newTime.getTime() < fullFilledSeconds + 1);
		return resolve(`Finished the ${x} seconds countdown!`);

	});