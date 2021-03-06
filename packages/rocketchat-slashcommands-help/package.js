Package.describe({
	name: 'rocketchat:slashcommands-help',
	version: '0.0.1',
	summary: 'Command handler for the /help command',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'check',
		'rocketchat:utils',
		'rocketchat:notifications',
		'templating',
	]);
	api.mainModule('server/index.js', 'server');
});
