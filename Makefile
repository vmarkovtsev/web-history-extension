log-web-history.zip: manifest.json background.js page.js firebase-*.js settings.html 16.png 32.png 48.png 128.png LICENSE
	rm -f log-web-history.zip
	zip -r log-web-history.zip manifest.json background.js page.js firebase-*.js settings.html 16.png 32.png 48.png 128.png LICENSE
