#!/bin/bash
echo "Начинаем..."
while (true) 
do
# bash ./script.sh
# sync ; echo 1 > /proc/sys/vm/drop_caches
invoke-rc.d rabbitmq-server stop
sleep 1;
invoke-rc.d rabbitmq-server start
 sleep 3;
 screen -d -m -S rabbit_session php /var/www/bit/artisan rabbit:start
 screen -d -m -S updater_session php /var/www/bit/artisan updater:start
 sleep 3600;
done;