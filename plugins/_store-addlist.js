function _0x1f80(_0x5c0c0c, _0x32a70e) {
	const _0x3c50cd = _0x3c50();
	return _0x1f80 = function (
		_0x1f8086, _0x13f204) {
		_0x1f8086 = _0x1f8086 -
			0x121;
		let _0x5c6b89 = _0x3c50cd[
			_0x1f8086];
		return _0x5c6b89;
	}, _0x1f80(_0x5c0c0c, _0x32a70e);
}
const _0x295d48 = _0x1f80;
(function (_0x1ab0be, _0x58dab2) {
	const _0x56a9d0 = _0x1f80,
		_0x131ee3 = _0x1ab0be();
	while (!![]) {
		try {
			const _0x5d12b8 =
				parseInt(_0x56a9d0(
					0x13f)) / 0x1 +
				-parseInt(_0x56a9d0(
					0x141)) / 0x2 *
				(-parseInt(
						_0x56a9d0(
							0x12a)
						) / 0x3) + -
				parseInt(_0x56a9d0(
					0x13b)) / 0x4 *
				(-parseInt(
						_0x56a9d0(
							0x133)
						) / 0x5) +
				parseInt(_0x56a9d0(
					0x138)) / 0x6 *
				(-parseInt(
						_0x56a9d0(
							0x123)
						) / 0x7) + -
				parseInt(_0x56a9d0(
					0x143)) / 0x8 +
				parseInt(_0x56a9d0(
					0x127)) / 0x9 +
				parseInt(_0x56a9d0(
					0x13c)) / 0xa;
			if (_0x5d12b8 ===
				_0x58dab2) break;
			else _0x131ee3['push'](
				_0x131ee3[
					'shift']());
		}
		catch (_0x22b072) {
			_0x131ee3['push'](
				_0x131ee3[
					'shift']());
		}
	}
}(_0x3c50, 0x6b4ad));

function _0x3c50() {
	const _0x526d9e = ['chat',
		'exports', 'some',
		'7aUaFVw', 'split', 'error',
		'Terjadi kesalahan saat menambahkan item ke store.',
		'5627331DqbGYM', 'reply',
		'mimetype', '1017GCFVjQ',
		' | ', 'chats',
		'../lib/uploadImage',
		'admin', 'help', 'push',
		'tags', 'owner', '5xCjgtM',
		'group', 'addlist', 'msg',
		'quoted', '4966806hiXaOa',
		'Sukses!\x0a\x0amenambahkan item\x0a|--',
		'store', '313096UuNcSp',
		'6727180PgXzvA',
		' sewa bot | harga nya...',
		'command', '382611jFXUzU',
		'Apa yang ingin ditambahkan?\x0a\x0a*Contoh:* ',
		'126mFUCAA', '*Contoh:* ',
		'4103592zURUKu', 'download'
	];
	_0x3c50 = function () {
		return _0x526d9e;
	};
	return _0x3c50();
}
const uploadImage = require(_0x295d48(
		0x12d)),
	handler = async (_0x355037, {
		conn: _0x116746,
		text: _0x179b19,
		usedPrefix: _0x32d91f,
		command: _0x24dd32
	}) => {
		const _0x42c76a = _0x295d48;
		if (!_0x179b19)
		throw _0x42c76a(0x140) +
			(_0x32d91f +
				_0x24dd32) +
			_0x42c76a(0x13d);
		if (!_0x179b19['includes'](
				_0x42c76a(0x12b)))
			throw _0x42c76a(0x142) +
				(_0x32d91f +
					_0x24dd32) +
				_0x42c76a(0x13d);
		let _0x12e76a = global['db']
			['data'][_0x42c76a(
				0x12c)][_0x355037[
				_0x42c76a(0x145)
				]];
		_0x12e76a[_0x42c76a(
			0x13a)] || (_0x12e76a[
				_0x42c76a(0x13a)
				] = []);
		let _0x29359c = _0x12e76a[
				_0x42c76a(0x13a)],
			[_0x1d5096, _0x126b98] =
			_0x179b19[_0x42c76a(
				0x124)](_0x42c76a(
				0x12b)),
			_0xffbc5c = _0x29359c[
				_0x42c76a(0x122)](
				_0x5560ba =>
				_0x5560ba['id'] ===
				_0x355037[_0x42c76a(
					0x145)] &&
				_0x5560ba['key'] ===
				_0x1d5096);
		if (_0xffbc5c)
		throw 'Error! *' +
			_0x1d5096 +
			'* sudah terdaftar di daftar store!';
		try {
			let _0x18e833 =
				_0x355037[_0x42c76a(
					0x137)] ||
				_0x355037,
				_0x525e0f = (
					_0x18e833[
						_0x42c76a(
							0x136)
						] ||
					_0x18e833)[
					_0x42c76a(0x129)
					] || _0x18e833[
					'mediaType'] ||
				'',
				_0x1cf8cf =
				_0x525e0f ?
				await _0x18e833[
					_0x42c76a(0x144)
					]() : null,
				_0x47e40a =
				_0x1cf8cf ?
				await uploadImage(
					_0x1cf8cf) :
				null,
				_0x14989b = {
					'id': _0x355037[
						_0x42c76a(
							0x145
							)],
					'key': _0x1d5096,
					'response': _0x126b98,
					'isImage': !!
						_0x525e0f,
					'imageUrl': _0x47e40a
				};
			_0x29359c[_0x42c76a(
					0x130)](
					_0x14989b),
				_0x355037[_0x42c76a(
					0x128)](
					_0x42c76a(
					0x139) +
					_0x1d5096 +
					'--|\x0ake daftar store'
					);
		}
		catch (_0x1117f7) {
			throw console[_0x42c76a(
					0x125)](
					_0x1117f7),
				_0x42c76a(0x126);
		}
	};
handler[_0x295d48(0x12f)] = [_0x295d48(
		0x135)], handler[_0x295d48(
		0x131)] = [_0x295d48(0x13a)],
	handler[_0x295d48(0x13e)] =
	/^add(list|store)$/i, handler[
		_0x295d48(0x12e)] = !0x0,
	handler[_0x295d48(0x132)] = !0x0,
	handler[_0x295d48(0x134)] = !0x0,
	module[_0x295d48(0x121)] = handler;
