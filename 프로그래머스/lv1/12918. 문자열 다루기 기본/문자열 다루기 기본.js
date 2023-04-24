function solution(s) {
	if (s.length === 4 || s.length === 6) {
		if (parseInt(s) == s) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}