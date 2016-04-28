/** * Get event ID from URL provided 
* @param {string} url 
* @return {string | false} */ 
module.exports.getEventId = function (url) { 
	var re = /[\D]*([\d]*)/g; 
	return re.exec(url)[1] || false; 
}; 