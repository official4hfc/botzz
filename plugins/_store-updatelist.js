function _0x3bd5(_0xb3e717, _0x3be64e) {
	const _0x18be35 = _0x18be();
	return _0x3bd5 = function (
		_0x3bd5a8, _0x37a723) {
		_0x3bd5a8 = _0x3bd5a8 -
		0xef;
		let _0x4960f5 = _0x18be35[
			_0x3bd5a8];
		return _0x4960f5;
	}, _0x3bd5(_0xb3e717, _0x3be64e);
}
const _0x3dd779 = _0x3bd5;
(function (_0x2c8c7f, _0x10146e) {
	const _0x57b23b = _0x3bd5,
		_0x11a012 = _0x2c8c7f();
	while (!![]) {
		try {
			const _0xc4c749 =
				parseInt(_0x57b23b(
					0xf1)) / 0x1 * (
					-parseInt(
						_0x57b23b(
							0x106)
						) / 0x2) + -
				parseInt(_0x57b23b(
					0x10a)) / 0x3 +
				parseInt(_0x57b23b(
					0x103)) / 0x4 *
				(-parseInt(
						_0x57b23b(
							0x117)
						) / 0x5) +
				parseInt(_0x57b23b(
					0x118)) / 0x6 +
				parseInt(_0x57b23b(
					0xef)) / 0x7 +
				parseInt(_0x57b23b(
					0x119)) / 0x8 *
				(parseInt(_0x57b23b(
						0x104)) /
					0x9) + parseInt(
					_0x57b23b(0xfe)
					) / 0xa * (
					parseInt(
						_0x57b23b(
							0x113)
						) / 0xb);
			if (_0xc4c749 ===
				_0x10146e) break;
			else _0x11a012['push'](
				_0x11a012[
					'shift']());
		}
		catch (_0x31f317) {
			_0x11a012['push'](
				_0x11a012[
					'shift']());
		}
	}
}(_0x18be, 0x7d43b));
let upload = require(_0x3dd779(0xf8)),
	handler = async (_0x30aa5d, {
		conn: _0x4426b9,
		text: _0x5d1c84,
		usedPrefix: _0x3e8f1d,
		command: _0x59453b
	}) => {
		const _0x1a51d7 = _0x3dd779;
		if (!_0x5d1c84)
		throw _0x1a51d7(0xfa) +
			(_0x3e8f1d +
				_0x59453b) +
			_0x1a51d7(0x10f);
		let _0x350114 = global['db']
			['data'][_0x1a51d7(
				0xf2)][_0x30aa5d[
				_0x1a51d7(0x108)
				]];
		'store' in _0x350114 || (
			_0x350114[
			'store'] = []);
		let _0x3e2f51 = _0x350114[
			_0x1a51d7(0x112)];
		if (!_0x3e2f51[0x0])
		throw _0x1a51d7(0xfc) +
			_0x3e8f1d +
			_0x1a51d7(0x116);
		let [_0x351a57, _0x5d4797] =
		_0x5d1c84[_0x1a51d7(0x109)](
				_0x1a51d7(0x115)),
			_0x5ee473 = _0x30aa5d[
				_0x1a51d7(0xf9)] ?
			_0x30aa5d[_0x1a51d7(
				0xf9)] : _0x30aa5d,
			_0x2e5453 = (_0x5ee473[
				_0x1a51d7(0x10c)
				] || _0x5ee473)[
				'mimetype'] ||
			_0x5ee473[_0x1a51d7(
				0x10e)] || '',
			_0x142bd0 = !!
			_0x2e5453 &&
			await _0x5ee473[
				_0x1a51d7(0x10d)](),
			_0x46b853 = _0x142bd0 ?
			await upload(
			_0x142bd0) : null,
			_0x33a424 = null,
			_0x263c82 = null;
		if (await Object[_0x1a51d7(
				0x105)](_0x3e2f51)[
				'forEach'](
				function (
				_0x21ed02) {
					const
						_0x266576 =
						_0x1a51d7;
					_0x4426b9[
							_0x266576(
								0xf7
								)][
							_0x266576(
								0xfb
								)
						]({
							'chat': _0x30aa5d[
								_0x266576(
									0x108
									)
								],
							'key': _0x351a57,
							'isinya': _0x21ed02,
							'storenya': _0x3e2f51[
								_0x21ed02
								]
						}),
						_0x3e2f51[
							_0x21ed02
							][
						'id'] ===
						_0x30aa5d[
							'chat'
							] &&
						_0x3e2f51[
							_0x21ed02
							][
							_0x266576(
								0xf3
								)
						] ===
						_0x351a57 &&
						(_0x33a424 =
							_0x21ed02,
							_0x263c82 =
							_0x3e2f51[
								_0x21ed02
								]);
				}), null !==
			_0x33a424 && null !==
			_0x263c82) _0x4426b9[
			_0x1a51d7(0xf7)][
			_0x1a51d7(0xfb)
		]({
			'isiStore': _0x263c82
		}), _0x30aa5d[_0x1a51d7(
			0x107)](_0x1a51d7(
				0x10b) +
			_0x263c82[_0x1a51d7(
				0xf3)] +
			_0x1a51d7(0x110))[
			_0x1a51d7(0xf5)](
		() => (_0x263c82[
					_0x1a51d7(
						0xf3)] =
				_0x351a57,
				_0x263c82[
					_0x1a51d7(
						0xfd)] =
				_0x5d4797,
				_0x263c82[
					_0x1a51d7(
						0x11a)
					] = !!
				_0x2e5453,
				_0x263c82[
					_0x1a51d7(
						0xff)] =
				_0x46b853, !0x0)
			);
		else {
			if (null !== _0x263c82)
				throw _0x263c82;
			else throw _0x1a51d7(
					0x111) +
				_0x5d1c84 +
				'* tidak ditemukan di list!\x0aketik *' +
				_0x3e8f1d +
				_0x1a51d7(0x102);
		}
	};
handler[_0x3dd779(0xf4)] = [_0x3dd779(
		0x100)], handler['tags'] = [
		'store'
	], handler[_0x3dd779(0xf0)] =
	/^up(date)?list$/i, handler[
		_0x3dd779(0xf6)] = !0x0,
	handler[_0x3dd779(0x114)] = !0x1,
	module[_0x3dd779(0x101)] = handler;

function _0x18be() {
	const _0x4049cd = ['10445plgEAk',
		'2260602emBcNo', '8bnqdmo',
		'isImage', '6525841gGZWQR',
		'command', '1MbEyil',
		'chats', 'key', 'help',
		'then', 'group', 'logger',
		'../lib/uploadImage',
		'quoted',
		'Uhm.. apa yng mau di update?\x0a\x0aContoh\x0a*',
		'info',
		'Belum ada list di grup ini!\x0auntuk menambahkan nya ketik *',
		'response', '8506150NwHURd',
		'imageUrl', 'updatelist',
		'exports',
		'liststore* untuk melihat list nya.',
		'1084zvLGVn',
		'969831puDfMI', 'keys',
		'1466292EjLunX', 'reply',
		'chat', 'split',
		'1365168VDfWCf',
		'Berhasil update *', 'msg',
		'download', 'mediaType',
		' jawa*',
		'* dari daftar list!',
		'Maaf, *', 'store',
		'11eXrCGQ', 'admin', ' | ',
		'addlist*'
	];
	_0x18be = function () {
		return _0x4049cd;
	};
	return _0x18be();
}
