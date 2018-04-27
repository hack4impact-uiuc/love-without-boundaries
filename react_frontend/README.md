# Frontend
A React app with relay
## Main Dependencies
- Relay
- React router
- isomorphic_unfetch

## Deployment
To serve this application on your server you must first build it, which will create a folder called `dist/` holding the bundled files. Then, you can run the application.
```
yarn run build
yarn run start
```

## Now Deployment
In order to test Google Authenticaton, you must use the url lwb.now.sh. You will have to be in the hack4impact team using now-cli. To deploy it to lwb.now.sh:
```
yarn run build
now
now alias [URL COPIED TO CLIPBOARD] lwb.now.sh
```
