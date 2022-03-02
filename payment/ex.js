// eval(function(p, a, c, k, e, r) {
// 	e = String;
// 	if ('0'.replace(0, e) == 0) {
// 		while (c--) r[e(c)] = k[c];
// 		k = [function(e) {
// 			return r[e] || e
// 		}];
// 		e = function() {
// 			return '[0-2]'
// 		};
// 		c = 1
// 	};
// 	while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
// 	return p
// } ('(function(){var 1=[\'name\',\'code\',\'yes\',\'address\'];for(let 0=2;0<1[\'length\'];0++){document[\'getElementsByClassName\'](1[0])[2][\'setAttribute\'](\'contenteditable\',\'true\')}}());', [], 3, '_0x3dccb1|_0x2bd8be|0x0'.split('|'), 0, {}))
let entrance_id = document.location.href.split('=').pop();
let address;
switch(entrance_id){
    case '4':
		address = '南湖校区东门';
		break;
	case '2':
		address = '南湖校区南门';
		break;
	case '3':
		address = '南湖校区西门';
		break;
	case '1':
		address = '南湖校区北门';
		break;
	case '5':
		address = '浑南校区东门';
		break;
	case '8':
		address = '浑南校区南门';
		break;
	case '9':
		address = '浑南校区西门';
		break;
	case '10':
		address = '浑南校区北门';
		break;
	case '11':
		address = '沈河校区';
		break;
	default:
		address = '领导的面门';
		break;
	
}
document.getElementsByClassName('address')[0].innerHTML = address + '<span data-v-4f0f08e4=""> 入</span>';
