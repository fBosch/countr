'use strict';

exports.__esModule = true;

exports.default = function (load) {
	function Async() {
		_preact.Component.call(this);
		let done = child => {
			this.setState({ child: child && child.default || child });
		};
		let r = load(done);
		if (r && r.then) r.then(done);
	}
	Async.prototype = new _preact.Component();
	Async.prototype.constructor = Async;
	Async.prototype.render = (props, state) => (0, _preact.h)(state.child, props);
	return Async;
};

var _preact = require('preact');