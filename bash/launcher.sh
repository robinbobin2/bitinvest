#!/bin/bash
echo "Начинаем..."
while (true) 
do
 rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl start_app
 bash ./script.sh
 sync ; echo 1 > /proc/sys/vm/drop_caches
 sleep 60;
done;