
class Common{

	getUISelector(selector){
		const element = $(`android=${selector}`)
		return element;
	}
}

module.exports = { Common: Common };