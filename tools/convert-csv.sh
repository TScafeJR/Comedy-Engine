read -p "Enter Filename: " filename
npx csvtojson ./data/"$filename".csv > ./data/"$filename".json
echo "$filename.json created"
