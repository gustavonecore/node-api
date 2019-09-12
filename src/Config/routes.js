module.exports = [
	{
		method: 'post',
		uri: '/setting',
		handler: 'SettingController::postCollection',
	},
	{
		method: 'get',
		uri: '/token',
		handler: 'TokenController::getCollection',
	},
];