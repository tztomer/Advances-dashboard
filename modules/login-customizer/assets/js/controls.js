/** @format */

!(function () {
	wp.customize.bind('ready', function () {
		o();
	});
	const o = () => {
			t(), i();
		},
		t = () => {
			wp.customize.section('udb_login_customizer_layout_section', function (o) {
				o.expanded.bind(function (o) {
					o &&
						('default' === wp.customize('udb_login[form_position]').get()
							? wp.customize.control('udb_login[box_width]').deactivate()
							: (wp.customize.control('udb_login[box_width]').activate(),
							  wp.customize
									.control('udb_login[form_horizontal_padding]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_width]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_style]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_color]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_radius]')
									.deactivate(),
							  wp.customize
									.control('udb_login[enable_form_shadow]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_shadow_blur]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_shadow_color]')
									.deactivate()));
				});
			});
		},
		i = () => {
			wp.customize('udb_login[template]', function (o) {
				o.bind(function (o) {
					const t = document.querySelector(
							'[data-control-name="udb_login[template]"] .is-selected img'
						),
						i = t ? t.dataset.bgImage : '';
					switch ((i && wp.customize('udb_login[bg_image]').set(i), o)) {
						case 'left':
							wp.customize('udb_login[form_position]').set('left');
							break;
						case 'right':
							wp.customize('udb_login[form_position]').set('right');
							break;
						default:
							wp.customize('udb_login[form_position]').set('default');
					}
				});
			}),
				wp.customize('udb_login[form_position]', function (o) {
					o.bind(function (o) {
						const t = wp.customize('udb_login[enable_form_shadow]').get();
						'default' === o
							? (wp.customize.control('udb_login[box_width]').deactivate(),
							  wp.customize
									.control('udb_login[form_horizontal_padding]')
									.activate(),
							  wp.customize.control('udb_login[form_border_width]').activate(),
							  wp.customize.control('udb_login[form_border_style]').activate(),
							  wp.customize.control('udb_login[form_border_color]').activate(),
							  wp.customize
									.control('udb_login[form_border_radius]')
									.activate(),
							  wp.customize
									.control('udb_login[enable_form_shadow]')
									.activate(),
							  t
									? (wp.customize
											.control('udb_login[form_shadow_blur]')
											.activate(),
									  wp.customize
											.control('udb_login[form_shadow_color]')
											.activate())
									: (wp.customize
											.control('udb_login[form_shadow_blur]')
											.deactivate(),
									  wp.customize
											.control('udb_login[form_shadow_color]')
											.deactivate()))
							: (wp.customize.control('udb_login[box_width]').activate(),
							  wp.customize
									.control('udb_login[form_horizontal_padding]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_width]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_style]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_color]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_border_radius]')
									.deactivate(),
							  wp.customize
									.control('udb_login[enable_form_shadow]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_shadow_blur]')
									.deactivate(),
							  wp.customize
									.control('udb_login[form_shadow_color]')
									.deactivate());
					});
				});
		};
})();
//# sourceMappingURL=controls.js.map
