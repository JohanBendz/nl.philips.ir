Homey.setTitle(Homey.__(options.title || ''));
Homey.emit('init', options.id);
Homey.on('show_view', function (viewId) {
	Homey.showView(viewId);
});
Homey.on('close', function () {
	Homey.close();
});
Homey.on('nextView', function (viewsIds) {
	var viewIndex = viewsIds.indexOf(options.id) + 1;
	if (viewIndex > 0 && viewIndex < viewsIds.length) {
		Homey.showView(viewsIds[viewIndex]);
	}
});
Homey.on('previousView', function (viewsIds) {
	var viewIndex = viewsIds.indexOf(options.id) - 1;
	if (viewIndex >= 0) {
		Homey.showView(viewsIds[viewIndex]);
	}
});
function nextView() {
	Homey.emit('next');
}
function parseSvg(svg, callback) {
	if (!svg) return svg;
	if (!(svg.indexOf('<svg>') === -1 || svg.indexOf('</svg>') === -1)) {
		return callback(svg);
	}
	try {
		var request = new XMLHttpRequest();
		console.log('requesting', svg);
		request.open("GET", svg);
		// request.setRequestHeader("Content-Type", "image/svg+xml");
		request.addEventListener("load", function (event) {
			callback(String(request.response))
		});
		request.send();
	} catch (e) {
		return callback(e);
	}
}
var alertQueue = [];
function showErrorMessage(err, callback) {
	function alert() {
		if (!alertQueue.length) return;
		Homey.alert(
			alertQueue[0].message,
			undefined,
			function () {
				alertQueue[0].callbacks.forEach(function (cb) {
					cb();
				});
				alertQueue.shift();
				alert();
			}
		);
	}

	var message = err.message && err.message.indexOf(' ') === -1 && __(err.message) !== err.message ?
		__(err.message) :
		err.message || JSON.stringify(err)

	if (alertQueue.length === 0) {
		alertQueue.push({ message: message, callbacks: typeof callback === 'function' ? [callback] : [] });
		alert();
	} else {
		var alert = alertQueue.filter(function (item) {
			item.message === message;
		});
		if (!alert || !alert.length) {
			alertQueue.push({ message: message, callbacks: typeof callback === 'function' ? [callback] : [] });
		}
		if (typeof callback === 'function') {
			alert[0].callbacks.push(callback);
		}
	}
}
