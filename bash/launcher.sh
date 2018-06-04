#!/bin/bash
echo "Начинаем..."
while (true) 
do
 bash ./script.sh
 sync ; echo 1 > /proc/sys/vm/drop_caches
 sleep 10;
done;