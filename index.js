
function precompileCJS(templates, opts) {
	var out = '', name, template, eol;
	opts = opts || {};
	eol = opts.eol || '\n';

	for ( var i = 0; i < templates.length; i++ ) {
		name = JSON.stringify(templates[i].name);
		template = templates[i].template;

		out += 'define(' + name + ', function() {' + eol +
			template + eol + '});' + eol;
	}
	return out;
}

module.exports.wrapper = precompileCJS;
