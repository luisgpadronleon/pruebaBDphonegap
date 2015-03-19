/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-type' : '&#xe000;',
			'icon-box' : '&#xe001;',
			'icon-archive' : '&#xe002;',
			'icon-envelope' : '&#xe003;',
			'icon-email' : '&#xe004;',
			'icon-files' : '&#xe005;',
			'icon-untitled' : '&#xe006;',
			'icon-file-settings' : '&#xe007;',
			'icon-file-add' : '&#xe008;',
			'icon-file' : '&#xe009;',
			'icon-align-left' : '&#xe00a;',
			'icon-align-right' : '&#xe00b;',
			'icon-align-center' : '&#xe00c;',
			'icon-align-justify' : '&#xe00d;',
			'icon-file-broken' : '&#xe00e;',
			'icon-browser' : '&#xe00f;',
			'icon-windows' : '&#xe010;',
			'icon-window' : '&#xe011;',
			'icon-folder' : '&#xe012;',
			'icon-folder-add' : '&#xe013;',
			'icon-folder-settings' : '&#xe014;',
			'icon-folder-check' : '&#xe015;',
			'icon-wifi-low' : '&#xe016;',
			'icon-wifi-mid' : '&#xe017;',
			'icon-wifi-full' : '&#xe018;',
			'icon-connection-empty' : '&#xe019;',
			'icon-connection-25' : '&#xe01a;',
			'icon-connection-50' : '&#xe01b;',
			'icon-connection-75' : '&#xe01c;',
			'icon-connection-full' : '&#xe01d;',
			'icon-list' : '&#xe01e;',
			'icon-grid' : '&#xe01f;',
			'icon-untitled-2' : '&#xe020;',
			'icon-battery-charging' : '&#xe021;',
			'icon-battery-empty' : '&#xe022;',
			'icon-battery-25' : '&#xe023;',
			'icon-battery-50' : '&#xe024;',
			'icon-battery-75' : '&#xe025;',
			'icon-battery-full' : '&#xe026;',
			'icon-settings' : '&#xe027;',
			'icon-arrow-left' : '&#xe028;',
			'icon-arrow-up' : '&#xe029;',
			'icon-arrow-down' : '&#xe02a;',
			'icon-arrow-right' : '&#xe02b;',
			'icon-reload' : '&#xe02c;',
			'icon-refresh' : '&#xe02d;',
			'icon-volume' : '&#xe02e;',
			'icon-volume-increase' : '&#xe02f;',
			'icon-volume-decrease' : '&#xe030;',
			'icon-mute' : '&#xe031;',
			'icon-microphone' : '&#xe032;',
			'icon-microphone-off' : '&#xe033;',
			'icon-book' : '&#xe034;',
			'icon-checkmark' : '&#xe035;',
			'icon-checkbox-checked' : '&#xe036;',
			'icon-checkbox' : '&#xe037;',
			'icon-paperclip' : '&#xe038;',
			'icon-download' : '&#xe039;',
			'icon-tag' : '&#xe03a;',
			'icon-trashcan' : '&#xe03b;',
			'icon-search' : '&#xe03c;',
			'icon-zoom-in' : '&#xe03d;',
			'icon-zoom-out' : '&#xe03e;',
			'icon-chat' : '&#xe03f;',
			'icon-chat-1' : '&#xe040;',
			'icon-chat-2' : '&#xe041;',
			'icon-chat-3' : '&#xe042;',
			'icon-comment' : '&#xe043;',
			'icon-calendar' : '&#xe044;',
			'icon-bookmark' : '&#xe045;',
			'icon-email-2' : '&#xe046;',
			'icon-heart' : '&#xe047;',
			'icon-enter' : '&#xe048;',
			'icon-cloud' : '&#xe049;',
			'icon-book-2' : '&#xe04a;',
			'icon-star' : '&#xe04b;',
			'icon-clock' : '&#xe04c;',
			'icon-printer' : '&#xe04d;',
			'icon-home' : '&#xe04e;',
			'icon-flag' : '&#xe04f;',
			'icon-meter' : '&#xe050;',
			'icon-switch' : '&#xe051;',
			'icon-forbidden' : '&#xe052;',
			'icon-lock' : '&#xe053;',
			'icon-unlocked' : '&#xe054;',
			'icon-unlocked-2' : '&#xe055;',
			'icon-users' : '&#xe056;',
			'icon-user' : '&#xe057;',
			'icon-users-2' : '&#xe058;',
			'icon-user-2' : '&#xe059;',
			'icon-bullhorn' : '&#xe05a;',
			'icon-share' : '&#xe05b;',
			'icon-screen' : '&#xe05c;',
			'icon-phone' : '&#xe05d;',
			'icon-phone-portrait' : '&#xe05e;',
			'icon-phone-landscape' : '&#xe05f;',
			'icon-tablet' : '&#xe060;',
			'icon-tablet-landscape' : '&#xe061;',
			'icon-laptop' : '&#xe062;',
			'icon-camera' : '&#xe063;',
			'icon-microwave-oven' : '&#xe064;',
			'icon-credit-cards' : '&#xe065;',
			'icon-calculator' : '&#xe066;',
			'icon-bag' : '&#xe067;',
			'icon-diamond' : '&#xe068;',
			'icon-drink' : '&#xe069;',
			'icon-shorts' : '&#xe06a;',
			'icon-vcard' : '&#xe06b;',
			'icon-sun' : '&#xe06c;',
			'icon-bill' : '&#xe06d;',
			'icon-coffee' : '&#xe06e;',
			'icon-untitled-3' : '&#xe06f;',
			'icon-newspaper' : '&#xe070;',
			'icon-stack' : '&#xe071;',
			'icon-map-marker' : '&#xe072;',
			'icon-map' : '&#xe073;',
			'icon-support' : '&#xe074;',
			'icon-untitled-4' : '&#xe075;',
			'icon-barbell' : '&#xe076;',
			'icon-stopwatch' : '&#xe077;',
			'icon-atom' : '&#xe078;',
			'icon-syringe' : '&#xe079;',
			'icon-health' : '&#xe07a;',
			'icon-bolt' : '&#xe07b;',
			'icon-pill' : '&#xe07c;',
			'icon-bones' : '&#xe07d;',
			'icon-lab' : '&#xe07e;',
			'icon-clipboard' : '&#xe07f;',
			'icon-mug' : '&#xe080;',
			'icon-bucket' : '&#xe081;',
			'icon-select' : '&#xe082;',
			'icon-graph' : '&#xe083;',
			'icon-crop' : '&#xe084;',
			'icon-image' : '&#xe085;',
			'icon-cube' : '&#xe086;',
			'icon-bars' : '&#xe087;',
			'icon-chart' : '&#xe088;',
			'icon-pencil' : '&#xe089;',
			'icon-measure' : '&#xe08a;',
			'icon-eyedropper' : '&#xe08b;',
			'icon-untitled-5' : '&#xe08c;',
			'icon-sunrise' : '&#xe08d;',
			'icon-sun-2' : '&#xe08e;',
			'icon-moon' : '&#xe08f;',
			'icon-sun-3' : '&#xe090;',
			'icon-windy' : '&#xe091;',
			'icon-wind' : '&#xe092;',
			'icon-snowflake' : '&#xe093;',
			'icon-cloudy' : '&#xe094;',
			'icon-cloud-2' : '&#xe095;',
			'icon-weather' : '&#xe096;',
			'icon-weather-2' : '&#xe097;',
			'icon-weather-3' : '&#xe098;',
			'icon-lines' : '&#xe099;',
			'icon-rainy' : '&#xe09a;',
			'icon-windy-2' : '&#xe09b;',
			'icon-windy-3' : '&#xe09c;',
			'icon-snowy' : '&#xe09d;',
			'icon-snowy-2' : '&#xe09e;',
			'icon-snowy-3' : '&#xe09f;',
			'icon-weather-4' : '&#xe0a0;',
			'icon-cloudy-2' : '&#xe0a1;',
			'icon-cloud-3' : '&#xe0a2;',
			'icon-lightning' : '&#xe0a3;',
			'icon-sun-4' : '&#xe0a4;',
			'icon-moon-2' : '&#xe0a5;',
			'icon-cloudy-3' : '&#xe0a6;',
			'icon-rainy-2' : '&#xe0a7;',
			'icon-windy-4' : '&#xe0a8;',
			'icon-windy-5' : '&#xe0a9;',
			'icon-snowy-4' : '&#xe0aa;',
			'icon-snowy-5' : '&#xe0ab;',
			'icon-weather-5' : '&#xe0ac;',
			'icon-cloudy-4' : '&#xe0ad;',
			'icon-lightning-2' : '&#xe0ae;',
			'icon-thermometer' : '&#xe0af;',
			'icon-compass' : '&#xe0b0;',
			'icon-none' : '&#xe0b1;',
			'icon-Celsius' : '&#xe0b2;',
			'icon-Fahrenheit' : '&#xe0b3;',
			'icon-cloud-4' : '&#xe0b4;',
			'icon-lightning-3' : '&#xe0b5;',
			'icon-lightning-4' : '&#xe0b6;',
			'icon-rainy-3' : '&#xe0b7;',
			'icon-cloud-5' : '&#xe0b8;',
			'icon-cloud-6' : '&#xe0b9;',
			'icon-lightning-5' : '&#xe0ba;',
			'icon-rainy-4' : '&#xe0bb;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};