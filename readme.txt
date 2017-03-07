Instructions for Setting Up A Dynamic Placeholder Image Generator on your own Server - https://img.sixteenbit.com

What are the requirements?
	You need to have a server than can run PHP code and supports the GD library. Since PHP 4.3 the GD library has been bundled in. For more info go to http://us2.php.net/manual/en/ref.image.php
	It will also help to have mod_rewrite enabled.

Sample .htaccess file
	If you can't see a .htaccess file (Windows hides it by default) copy htaccess.txt to your server and rename it to .htaccess

Credit
	Code written by Russell Heimlich - http://www.russellheimlich.com/blog
	Contact: http://www.russellheimlich.com/contact.html

	Some code was written by Ruquay K Calloway http://ruquay.com/sandbox/imagettf/ to detect the text bounding box better (see comments in the PHP code.)
