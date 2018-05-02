#!/bin/bash
regex=".*.rabbit_session"
tab=$(printf '\t')
export isLaunched=false;
screen -ls rabbit_session | while IFS=$tab read -r session time state; do 
if [[ $session =~ $regex ]]
then
    isLaunched=true
    echo "$isLaunched" > ./envFile
    break
fi
isLaunched=false
echo "$isLaunched" > ./envFile
done 

isLaunched=$(<./envFile)

if ! [ "$isLaunched" == "true" ]
then
    screen -d -m -S rabbit_session php /var/www/bit/artisan rabbit:start
fi

