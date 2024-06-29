export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		await storeValue(this.myVar2, 'hello world')
		this.myVar2 = [1,2,3]
		return this.myVar2;
	}
}