#!/bin/bash
echo "Начинаем..."
while (true) 
do
 rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl start_app
 bash ./script.sh
 sync ; echo 1 > /proc/sys/vm/drop_caches
 sleep 10;
done;


SELECT ex.currency, sum(ex.volume * ex.value) as volume FROM (select * from exchangeRatesInfo where 
currency IN (
"BTC/USD",
"ETH/USD",
"XRP/USD",
"BCH/USD",
"LTC/USD",
"ETC/USD",
"GTC/USD",
"QTUM/USD",
"NEO/USD",
"EOS/USD",
"BCC/USD",
"TRX/USD") and volume is not null) t 

LEFT JOIN exchangeRates ex on ex.id = t.nowId
GROUP BY ex.currency