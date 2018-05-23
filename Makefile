backend: stopbackend
	chmod +x deploy_backend.sh
	./deploy_backend.sh

nginx:
	sudo systemctl restart nginx

all: backend nginx

stopbackend:
	-pkill -f h4i_web_backend

clean: stopbackend
