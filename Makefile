files = $(wildcard src/*)

deploy:
	cp -rt public/ $(files)
	firebase deploy
