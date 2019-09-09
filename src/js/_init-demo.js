jQuery(document).ready(
	function () {
		$('#demo input, #demo select').change(function () {
			updateDemo();
		});

		function updateDemo() {
			var url = window.location.href,
				$this = '',
				val = '';

			$('#demo input, #demo select').each(function (count) {
				$this = $(this);

				val = $this.val();

				if (val) {
					switch (count) {
						case 1:
							url += '/' + val;
							break;
						case 2:
							url += '/' + val;
							break;
						case 4:
							var text = val;
							text = text.replace(/#/ig, "0x23");
							text = text.replace(/%/ig, "0x25");
							text = text.replace(/&/ig, "0x26");
							text = text.replace(/\+/ig, "0x2B");
							text = text.replace(/\s/ig, '+');
							url += '&text=' + text;
							break;
						default:
							url += val;
					}
				}
			});
			$('#preview img').attr('src', url);
			$('#preview').attr('href', url);
			$('#demo a').attr('href', url).text(url);
		}

		updateDemo();
	}
);
