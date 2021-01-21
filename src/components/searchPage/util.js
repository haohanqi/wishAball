export const filterData = (wishasport, cate, cityFilter, sportFilter) => {
	console.log("call")
	// according to cate set data
	let data
	if (cate && cate === "sport") {
		data = wishasport
	} else {
		data = null
	}

	// get selected fields
	let cities = getSelectFiled(cityFilter)
	let sports = getSelectFiled(sportFilter)
	//console.log("cities", cities)
	//console.log("sports", sports)

	//filter data
	let cityResult = []
	cities.forEach(city => {
		let cityData = data.filter(item => item.city === city)
		cityResult = cityResult.concat(cityData)
	})

	let sportResult = []
	sports.forEach(sport => {
		let sportData = cityResult.filter(item => item.sport === sport)
		sportResult = sportResult.concat(sportData)
	})

	//console.log("sportResult", sportResult)

	return sportResult
}

export const getSelectFiled = filterObject => {
	let result = []
	for (const [key, value] of Object.entries(filterObject)) {
		if (value.filter.length > 0) {
			result.push(value.filter)
		}
	}
	return result
}