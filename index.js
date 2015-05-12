
function precompileAMD(templates, opts) {
	var out = '', name, template, eol, moduleName;
	opts = opts || {};
	eol = opts.eol || '\n';
	moduleName = opts.moduleName
		? JSON.stringify(opts.moduleName)+', '
		: '';

	out = 'define('+moduleName+'function() {' + eol +
		'var templates = {};' + eol;

	for ( var i = 0; i < templates.length; i++ ) {
		name = JSON.stringify(templates[i].name);
		template = templates[i].template;

		out += 'templates[' + name + '] = ' +
			'(function() {' + eol + template + eol +
			'})();' + eol;
	}
	out += 'return templates;' + eol + '});' + eol;
	return out;
}

module.exports.wrapper = precompileAMD;
