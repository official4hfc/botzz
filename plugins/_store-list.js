function _0x190f() {
	const _0x501fd4 = ['data',
		'924750KGTwsD', ' Kak ',
		'\x0a\x0a*Silahkan Ketik Kata Kunci Tersebut*\x0a*Tanpa Menggunakan Tanda #!/.*',
		'Selamat malam', '63gbXdBW',
		'275IiEgyC',
		'Berikut ini adalah daftar store yang ada di grup ini:\x0a',
		'group', 'tags', 'addlist*',
		'floor', 'command',
		'5AVePBH', 'store',
		'Asia/Jakarta', '10vUqVON',
		'123450PSNObD',
		'1576074MjIyox',
		'moment-timezone', 'chat',
		'map', '2533237fCHwyY',
		'reply', '851104QpeOqG',
		'sahabat', ' •֊•*.\x0a\x0a',
		'73611AiVwJE', 'Halo',
		'name', 'exports',
		'Selamat siang', 'chats',
		'136688pbPFgC',
		'Selamat pagi'
	];
	_0x190f = function () {
		return _0x501fd4;
	};
	return _0x190f();
}
const _0x106b2b = _0x3afe;
(function (_0xeba055, _0x436b51) {
	const _0x10b0e7 = _0x3afe,
		_0x3807cc = _0xeba055();
	while (!![]) {
		try {
			const _0x27e5d3 = -
				parseInt(_0x10b0e7(
					0xe0)) / 0x1 * (
					parseInt(
						_0x10b0e7(
							0xf8)) /
					0x2) + parseInt(
					_0x10b0e7(0xfa)
					) / 0x3 +
				parseInt(_0x10b0e7(
					0x100)) / 0x4 *
				(parseInt(_0x10b0e7(
						0xf5)) /
					0x5) + -
				parseInt(_0x10b0e7(
					0xe9)) / 0x6 + -
				parseInt(_0x10b0e7(
					0xfe)) / 0x7 +
				parseInt(_0x10b0e7(
					0xe6)) / 0x8 * (
					parseInt(
						_0x10b0e7(
							0xed)) /
					0x9) + -
				parseInt(_0x10b0e7(
					0xf9)) / 0xa * (
					-parseInt(
						_0x10b0e7(
							0xee)) /
					0xb);
			if (_0x27e5d3 ===
				_0x436b51) break;
			else _0x3807cc['push'](
				_0x3807cc[
					'shift']());
		}
		catch (_0x199160) {
			_0x3807cc['push'](
				_0x3807cc[
					'shift']());
		}
	}
}(_0x190f, 0x44eb2));

function _0x3afe(_0x15cbf6, _0x32caf9) {
	const _0x190fac = _0x190f();
	return _0x3afe = function (
		_0x3afe6f, _0xcfd939) {
		_0x3afe6f = _0x3afe6f -
		0xe0;
		let _0x510891 = _0x190fac[
			_0x3afe6f];
		return _0x510891;
	}, _0x3afe(_0x15cbf6, _0x32caf9);
}
const moment = require(_0x106b2b(0xfb));
let handler = async (_0x59066a, {
	conn: _0x552f7d,
	usedPrefix: _0x4b471d
}) => {
	const _0x30a1b7 = _0x106b2b;
	let _0xb00f87 = global['db']
		[_0x30a1b7(0xe8)][
			_0x30a1b7(0xe5)
		][_0x59066a[_0x30a1b7(
			0xfc)]]['store'];
	if (_0x30a1b7(0xf6) in db[
			_0x30a1b7(0xe8)][
			'chats'
		][_0x59066a[_0x30a1b7(
			0xfc)]] || (
			_0xb00f87 = []), !
		_0xb00f87[0x0])
	throw 'Belum ada list store di grup ini.\x0auntuk menambahkan ketik *' +
		_0x4b471d +
		_0x30a1b7(0xf2);
	let _0x4cbfaf = _0xb00f87[
		_0x30a1b7(0xfd)](
		_0x255304 => '⇒ ' +
		_0x255304['key'])[
		'join']('\x0a');
	
	function _0x12b28c() {
		const _0x4815fc =
			_0x30a1b7;
		let _0x2a866f =
		moment()['tz'](
				_0x4815fc(0xf7)
				),
			_0x376c7c =
			_0x2a866f['hour']();
		return {
			0x0: _0x4815fc(
				0xec),
			0x6: _0x4815fc(
				0xe7),
			0xc: _0x4815fc(
				0xe4),
			0x12: 'Selamat sore'
		} [Math[_0x4815fc(0xf3)]
			(_0x376c7c / 0x6)
		] || _0x4815fc(0xe1);
	}
	let _0x59b881 = _0x59066a[
			'pushName'] ||
		_0x59066a[_0x30a1b7(
			0xe2)] || _0x30a1b7(
			0x101),
		_0x3d3425 = '*' +
		_0x12b28c() + _0x30a1b7(
			0xea) + _0x59b881 +
		_0x30a1b7(0x102);
	_0x3d3425 += _0x30a1b7(
		0xef), _0x3d3425 +=
		_0x4cbfaf, _0x3d3425 +=
		_0x30a1b7(0xeb),
		_0x59066a[_0x30a1b7(
			0xff)](_0x3d3425);
};
handler['help'] = ['liststore'],
	handler[_0x106b2b(0xf1)] = [
	'store'], handler[_0x106b2b(0xf4)] =
	/^list(store)?$/i, handler[
		_0x106b2b(0xf0)] = !0x0, module[
		_0x106b2b(0xe3)] = handler;
