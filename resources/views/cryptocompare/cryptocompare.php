<?php	

		$cryptocompareApi = new Cryptocompare\CryptocompareApi();
		$example1 = $cryptocompareApi->getAvailableCalls();
		// print_r($example1);

		$cryptocompareMarket = new Cryptocompare\Market();
		$cryptocompareCoin = new Cryptocompare\Coin();
		// $example2 = $cryptocomparePrice->getSinglePrice("1","BTC","USD","CCCAGG","false");
		// print_r($cryptocomparePrice);
		$example2 = $cryptocompareCoin->getSnap("BTC", "USD");
		echo json_encode($example2);
		
		$example3 = $cryptocompareCoin->getList();
		// print_r($example3);

		?>