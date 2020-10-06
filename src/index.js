module.exports = function check(str, bracketsConfig) {
  
	let stack = []
	let configs = {}
	let count = 0

	for (let config of bracketsConfig) {
		configs[config[0]] = config[1]
	}

	for (let bracket of str) {
		if (bracket in configs) {
			if (bracket == configs[bracket] && stack[stack.length-1] == configs[bracket]) {
				stack.pop()
				continue
			}
			stack.push(bracket)
		} else {
			if (stack.length == 0) {
				return false
			} else {
				let top = stack[stack.length-1]

				if (bracket == configs[top]) {
					stack.pop()
				}
			}
		}
	}
	console.log(stack)
	if (stack.length == 0) {
		return true
	} else {
		return false
	}
}
