# FILE=mobile.html
FILE=index.html

all:
	# firefox index.html
	firefox $(FILE)

test:
	firefox slide.html

edit:
	vim $(FILE)
