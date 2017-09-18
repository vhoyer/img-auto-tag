files = js style.css index.html help.html

deploy:
	cp -rt public/ $(files)
	firebase deploy
