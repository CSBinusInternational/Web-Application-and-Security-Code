<script>
const promise = new Promise(function (resolve, reject) {
	const string1 = "shravansrinivasan";
	const string2 = "shravansrinivasan";
	if (string1 === string2) {
	resolve();
	} else {
	reject();
	}
});

promise
	.then(function () {
	console.log("Promise is sucessful");
	})
	.catch(function () {
	console.log("Failure of the promise");
	});
</script>
