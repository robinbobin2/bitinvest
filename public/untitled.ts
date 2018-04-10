  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
      
  	// const alldata = http.get<Array<Cripto>>('/allcrypto');
   //  Observable.interval(1000).subscribe(wait => {
  	// alldata.subscribe(response => {
  		// console.log(response);
      let admin = ['BTC', 'XRP', 'XMR', 'ETH', 'TRX'];
  		
  		// console.log(admin);
      // this.dataUsd.length = 0;
      // let admin = ['BTC', 'XRP', 'ETH']

      for (var _i = 0; _i < admin.length; ++_i) {
        // console.log(this.admin[i].symbol);
        let index = _i;
        let symbol = admin[index];
        let year = 2009;
        let algo = 'SHA';
        let desc = 'DESC';
        const path = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+symbol+"&tsyms=RUB,USD,EUR";
        const info = http.get(path);
        console.log(index);
        console.log('subscribe');
        info.subscribe(response => {
          var usd_data = response['DISPLAY'][symbol]['USD'];
            if(this.dataUsd[index]) {
              this.dataUsd[index]={
                sym:symbol,
                year:year,
                algo:algo,
                desc: desc,
                price: usd_data.PRICE,
                lastupdate: usd_data.LASTUPDATE,
                mktcap: usd_data.MKTCAP,
                vol24hours: usd_data.VOLUME24HOUR,
                open24hours: usd_data.OPEN24HOUR,
                low24hours: usd_data.LOW24HOUR,
                high24hours: usd_data.HIGH24HOUR,
                lasttrade: usd_data.LASTTRADEID,
                CHANGEPCT24HOUR:usd_data.CHANGEPCT24HOUR,
                CHANGEPCTDAY:usd_data.CHANGEPCTDAY
          };
            } else {
              this.dataUsd[index]={
                sym:symbol,
                year:year,
                algo:algo,
                desc: desc,
                price: usd_data.PRICE,
                lastupdate: usd_data.LASTUPDATE,
                mktcap: usd_data.MKTCAP,
                vol24hours: usd_data.VOLUME24HOUR,
                open24hours: usd_data.OPEN24HOUR,
                low24hours: usd_data.LOW24HOUR,
                high24hours: usd_data.HIGH24HOUR,
                lasttrade: usd_data.LASTTRADEID,
                CHANGEPCT24HOUR:usd_data.CHANGEPCT24HOUR,
                CHANGEPCTDAY:usd_data.CHANGEPCTDAY
          };
              console.log('added');
              console.log(index);
              
          }
        
      });
        console.log('endsubscribe');
      }
      console.log(this.dataUsd);

  	// });
    
   //  });
    
  }







  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
      
    const alldata = http.get<Array<Cripto>>('/allcrypto');
    Observable.interval(1000).subscribe(wait => {
    alldata.subscribe(response => {
      console.log(response);
      let admin = response;
      for (var _i = 0; _i < admin.length; ++_i) {
        // console.log(this.admin[i].symbol);
        let index = _i;
        let symbol = admin[index].symbol;
        let year = admin[index].year;
        let algo = admin[index].algo;
        let desc = 'DESC';
        const path = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+symbol+"&tsyms=RUB,USD,EUR";
        const info = http.get(path);
        info.subscribe(response => {
          var usd_data = response['DISPLAY'][symbol]['USD'];
            if(this.dataUsd[index]) {
              // console.log(this.dataUsd[index]);
              
               this.dataUsd[index].sym=symbol;
                this.dataUsd[index].year=year;
                this.dataUsd[index].algo=algo;
                this.dataUsd[index].desc= desc;
                this.dataUsd[index].price= usd_data.PRICE;
                this.dataUsd[index].lastupdate= usd_data.LASTUPDATE;
                this.dataUsd[index].mktcap= usd_data.MKTCAP;
                this.dataUsd[index].vol24hours= usd_data.VOLUME24HOUR;
                this.dataUsd[index].open24hours= usd_data.OPEN24HOUR;
                this.dataUsd[index].low24hours= usd_data.LOW24HOUR;
                this.dataUsd[index].high24hours= usd_data.HIGH24HOUR;
                this.dataUsd[index].lasttrade= usd_data.LASTTRADEID;
                this.dataUsd[index].CHANGEPCT24HOUR=usd_data.CHANGEPCT24HOUR;
                this.dataUsd[index].CHANGEPCTDAY=usd_data.CHANGEPCTDAY;
          
            } else {
              this.dataUsd[index]={
                sym:symbol,
                year:year,
                algo:algo,
                desc: desc,
                price: usd_data.PRICE,
                lastupdate: usd_data.LASTUPDATE,
                mktcap: usd_data.MKTCAP,
                vol24hours: usd_data.VOLUME24HOUR,
                open24hours: usd_data.OPEN24HOUR,
                low24hours: usd_data.LOW24HOUR,
                high24hours: usd_data.HIGH24HOUR,
                lasttrade: usd_data.LASTTRADEID,
                CHANGEPCT24HOUR:usd_data.CHANGEPCT24HOUR,
                CHANGEPCTDAY:usd_data.CHANGEPCTDAY
         };   
          }
      });
      }
    });
    
    });
  }