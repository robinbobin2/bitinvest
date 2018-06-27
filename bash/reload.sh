#!/bin/bash
invoke-rc.d rabbitmq-server stop
sleep 2;
invoke-rc.d rabbitmq-server start
sleep 2;
screen -d -m -S rabbit_session php /var/www/bit/artisan rabbit:start
sleep 2;
screen -d -m -S updater_session php /var/www/bit/artisan updater:start
sleep 2;