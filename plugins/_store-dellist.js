function _0x46ce(_0x6163fa, _0x2c2201) {
	const _0x312d1a = _0x312d();
	return _0x46ce = function (
		_0x46ce36, _0x57c375) {
		_0x46ce36 = _0x46ce36 -
			0x14d;
		let _0x180bda = _0x312d1a[
			_0x46ce36];
		return _0x180bda;
	}, _0x46ce(_0x6163fa, _0x2c2201);
}
const _0x28f043 = _0x46ce;
(function (_0x1f57a8, _0x2c7dd6) {
	const _0x5e923d = _0x46ce,
		_0x566bef = _0x1f57a8();
	while (!![]) {
		try {
			const _0x588855 = -
				parseInt(_0x5e923d(
					0x166)) / 0x1 +
				parseInt(_0x5e923d(
					0x15b)) / 0x2 +
				parseInt(_0x5e923d(
					0x158)) / 0x3 *
				(parseInt(_0x5e923d(
						0x156)) /
					0x4) + parseInt(
					_0x5e923d(0x15a)
					) / 0x5 * (-
					parseInt(
						_0x5e923d(
							0x168)
						) / 0x6) +
				parseInt(_0x5e923d(
					0x159)) / 0x7 +
				-parseInt(_0x5e923d(
					0x169)) / 0x8 +
				-parseInt(_0x5e923d(
					0x153)) / 0x9;
			if (_0x588855 ===
				_0x2c7dd6) break;
			else _0x566bef['push'](
				_0x566bef[
					'shift']());
		}
		catch (_0x32ecd1) {
			_0x566bef['push'](
				_0x566bef[
					'shift']());
		}
	}
}(_0x312d, 0xc4a66));

function _0x312d() {
	const _0xafab7d = ['96ywLERw',
		'6595673SFeFtp',
		'130AOhGeS',
		'2177526DdcmDM', 'Maaf, *',
		'tags', 'reply', 'help',
		'belum ada list di grup ini!',
		'berhasil menghapus *',
		'Uhm.. mana yg mau di hapus?\x0aContoh:\x0a*',
		' Key*', 'exports', 'data',
		'208312vzfXSA', 'chat',
		'6162SfYKWS',
		'8981576mTwdRi', 'dellist',
		'command', 'forEach',
		'chats', 'then', 'group',
		'7742925BGVpcK',
		'liststore* untuk melihat list nya.',
		'key', '124064OkUTph',
		'splice'
	];
	_0x312d = function () {
		return _0xafab7d;
	};
	return _0x312d();
}
let handler = async (_0x33752d, {
	conn: _0x4287ca,
	text: _0x137dd6,
	usedPrefix: _0x52cb63,
	command: _0x1f16be
}) => {
	const _0x414029 = _0x46ce;
	if (!_0x137dd6)
	throw _0x414029(0x162) +
		(_0x52cb63 +
			_0x1f16be) +
		_0x414029(0x163);
	let _0x5ef91f = global['db']
		[_0x414029(0x165)][
			_0x414029(0x150)
		][_0x33752d[_0x414029(
			0x167)]];
	'store' in _0x5ef91f || (
		_0x5ef91f[
		'store'] = []);
	let _0x5c8ff2 = _0x5ef91f[
		'store'];
	if (!_0x5c8ff2[0x0])
	throw _0x414029(0x160);
	let _0x570afb = null,
		_0x7ede96 = null;
	if (await Object['keys'](
			_0x5c8ff2)[
			_0x414029(0x14f)](
			function (
			_0x1594c9) {
				const
					_0x25b0e1 =
					_0x414029;
				_0x5c8ff2[
						_0x1594c9
						][
					'id'] ===
					_0x33752d[
						_0x25b0e1(
							0x167
							)
						] &&
					_0x5c8ff2[
						_0x1594c9
						][
					'key'] ===
					_0x137dd6 &&
					(_0x570afb =
						_0x1594c9,
						_0x7ede96 =
						_0x5c8ff2[
							_0x1594c9
							]);
			}), null !==
		_0x570afb) _0x33752d[
		_0x414029(0x15e)](
		_0x414029(0x161) +
		_0x7ede96[_0x414029(
			0x155)] +
		'* dari daftar list!'
		)[_0x414029(0x151)](
		() => (_0x5c8ff2[
			_0x414029(
				0x157)](
			_0x570afb,
			0x1), !0x0));
	else throw _0x414029(
		0x15c) + _0x137dd6 +
		'* tidak ditemukan di list!\x0aketik *' +
		_0x52cb63 +
		_0x414029(0x154);
};
handler[_0x28f043(0x15f)] = [_0x28f043(
		0x14d)], handler[_0x28f043(
		0x15d)] = ['store'], handler[
		_0x28f043(0x14e)] =
	/^dellist$/i, handler[_0x28f043(
		0x152)] = !0x1, handler[
	'admin'] = !0x0, module[_0x28f043(
		0x164)] = handler;
