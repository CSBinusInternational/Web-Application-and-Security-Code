<script>
const helperPromise = function () {
	const promise = new Promise(function (resolve, reject) {
	const x = "Tom and jerry";
	const y = "TomandJerry";
	if (x === y) {
		resolve("100% unique string");
	} else {
		reject("0% unique string");
	}
	});

	return promise;
};

async function demoPromise() {
	try {
	let message = await helperPromise();
	console.log(message);
	} catch (error) {
	console.log("Error: " + error);
	}
}

demoPromise();
</script>
