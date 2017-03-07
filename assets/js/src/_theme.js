/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Placeholders
 * https://github.com/mrdink/placeholders
 *
 * Copyright (c) 2017 Justin Peacock
 * Licensed under the GPLv2+ license.
 * ======================================================================== */

(function ( $ ) {

	// Use this variable to set up the common and page specific functions. If you
	// rename this variable, you will also need to rename the namespace below.
	var PLACEHOLDERS = {
		// All pages
		common: {
			init: function () {
				// JavaScript to be fired on all pages

				// Foundation JavaScript
				// @link http://foundation.zurb.com/docs
				$( document ).foundation();

				$( '#demo input, #demo select' ).change( function () {
					updateDemo();
				} );

				function updateDemo () {
					var url = window.location.href,
						$this = '',
						val = '';

					$( '#demo input, #demo select' ).each( function ( count ) {
						$this = $( this );

						val = $this.val();

						if ( val ) {
							switch (count) {
								case 1:
									url += '/' + val;
									break;
								case 2:
									url += '/' + val;
									break;
								case 4:
									var text = val;
									text = text.replace( /#/ig, "0x23" );
									text = text.replace( /%/ig, "0x25" );
									text = text.replace( /&/ig, "0x26" );
									text = text.replace( /\+/ig, "0x2B" );
									text = text.replace( /\s/ig, '+' );
									url += '&text=' + text;
									break;
								default:
									url += val;
							}
						}
					} );
					$( '#preview img' ).attr( 'src', url );
					$( '#preview' ).attr( 'href', url );
					$( '#demo a' ).attr( 'href', url ).text( url );
				}

				updateDemo();

			}
		}
	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
	var UTIL = {
		fire: function ( func, funcname, args ) {
			var namespace = PLACEHOLDERS;
			funcname = (funcname === undefined) ? 'init' : funcname;
			if ( func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function' ) {
				namespace[func][funcname]( args );
			}
		},
		loadEvents: function () {
			UTIL.fire( 'common' );

			$.each( document.body.className.replace( /-/g, '_' ).split( /\s+/ ), function ( i, classnm ) {
				UTIL.fire( classnm );
			} );
		}
	};

	$( document ).ready( UTIL.loadEvents );

})( jQuery ); // Fully reference jQuery after this point.
