echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* web@172.16.0.163:/var/www/172.16.0.163/

echo "DONE!"