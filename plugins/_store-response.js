const _0x4638fa = _0x4b57;

function _0x4b57(_0x238ce3, _0xe9cd11) {
	const _0x415b69 = _0x415b();
	return _0x4b57 = function (
		_0x4b571a, _0x27afdb) {
		_0x4b571a = _0x4b571a -
			0x145;
		let _0x48c9a8 = _0x415b69[
			_0x4b571a];
		return _0x48c9a8;
	}, _0x4b57(_0x238ce3, _0xe9cd11);
}

function _0x415b() {
	const _0x41321b = ['chats', 'key',
		'207434xykfaU',
		'toLowerCase', 'store',
		'3815520YNSEdP',
		'4604756MFRwKQ', 'includes',
		'title', '6547480zYdADi',
		'chat', '34993CEFCId',
		'sendMedia', '1592gZQbdB',
		'1065549ODdKIv', 'find',
		'data', 'isImage',
		'response', 'exports',
		'25607619DHzOMB',
		'12VzVOOQ',
		'listResponseMessage'
	];
	_0x415b = function () {
		return _0x41321b;
	};
	return _0x415b();
}(function (_0x5dc8e6, _0x56853a) {
	const _0xd19daf = _0x4b57,
		_0x4ecb27 = _0x5dc8e6();
	while (!![]) {
		try {
			const _0x5136b3 = -
				parseInt(_0xd19daf(
					0x14f)) / 0x1 +
				-parseInt(_0xd19daf(
					0x15a)) / 0x2 *
				(-parseInt(
						_0xd19daf(
							0x156)
						) / 0x3) + -
				parseInt(_0xd19daf(
					0x147)) / 0x4 +
				parseInt(_0xd19daf(
					0x14a)) / 0x5 +
				-parseInt(_0xd19daf(
					0x146)) / 0x6 +
				parseInt(_0xd19daf(
					0x14c)) / 0x7 *
				(-parseInt(
						_0xd19daf(
							0x14e)
						) / 0x8) +
				parseInt(_0xd19daf(
					0x155)) / 0x9;
			if (_0x5136b3 ===
				_0x56853a) break;
			else _0x4ecb27['push'](
				_0x4ecb27[
					'shift']());
		}
		catch (_0x4a90ed) {
			_0x4ecb27['push'](
				_0x4ecb27[
					'shift']());
		}
	}
}(_0x415b, 0xb0514), module[
	_0x4638fa(0x154)] = {
	async 'all'(_0x497843) {
		const _0x5917f2 =
			_0x4638fa;
		let _0x3ba942 = global[
				'db'][_0x5917f2(
				0x151)]['chats']
			[_0x497843[
				_0x5917f2(
					0x14b)]];
		_0x5917f2(
			0x145) in _0x3ba942 ||
			(_0x3ba942[
					_0x5917f2(
						0x145)
					] = []);
		let _0x1cbb28 = global[
			'db'][_0x5917f2(
			0x151)][
			_0x5917f2(0x158)
		][_0x497843[
			_0x5917f2(
				0x14b)]][
			_0x5917f2(0x145)
		];
		if (!_0x1cbb28[0x0])
			return;
		let _0x2292f7 = (
				_0x497843[
					'text'] ||
				_0x497843[
					'message'][
					_0x5917f2(
						0x157)
				]?.[_0x5917f2(
					0x149)])?.[
				_0x5917f2(0x15b)
			](),
			_0x38cbdd =
			_0x1cbb28[_0x5917f2(
				0x150)](
				_0xdb1676 =>
				_0xdb1676[
					_0x5917f2(
						0x159)][
					_0x5917f2(
						0x15b)
				]()[_0x5917f2(
					0x148)](
					_0x2292f7));
		if (_0x38cbdd) {
			let _0x3df760 = !
				0x0 ===
				_0x38cbdd[
					_0x5917f2(
						0x152)
					] &&
				_0x38cbdd[
					'imageUrl'];
			_0x3df760 ?
				await this[
					_0x5917f2(
						0x14d)](
					_0x497843[
						_0x5917f2(
							0x14b
							)],
					_0x3df760,
					_0x497843, {
						'caption': _0x38cbdd[
							_0x5917f2(
								0x153
								)
							]
					}) :
				await this[
					'reply'](
					_0x497843[
						'chat'],
					_0x38cbdd[
						_0x5917f2(
							0x153
							)],
					_0x497843);
		}
	}
});
