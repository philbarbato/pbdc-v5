
// doesn't look like this works. attempting to keep links in standalone iOS app from openig in Safari.
// if (window.navigator.standalone) {
// 	var local = document.domain;
// 	$('a').click(function() {
// 		var a = $(this).attr('href');
// 		if ( a.match('http://' + local) || a.match('http://www.' + local) ){
// 			event.preventDefault();
// 			document.location.href = a;
// 		}
// 	});
// }