#!/bin/bash

cd web_backend
if yarn build; then
	exec -a h4i_backend yarn start > backend.log 2>&1 &
fi
