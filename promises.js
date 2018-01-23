let myPromise = new Promise(function(resolve,reject){
	let gotThePromise = true;
if(gotThePromise){
	resolve("promise done!");
}else{
	reject("try again and make your promise");
}
});


myPromise.then(function(resolve){
	console.log(resolve);
}).catch(function(reject){
	console.log(reject);
});

