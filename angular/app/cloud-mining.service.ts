import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders({'Content-type': 'Application/json '});

@Injectable()
export class CloudMiningService {

   constructor(private http:HttpClient) {  }
  path = '/miningraw/top';
   pathIco = '/icoraw/top'
    public getTop() {

        return this.http.get<any>(this.path);

    }
    public getMiningId(id) {

        return this.http.get<any>('/miningraw/'+id);

    }
    public getIcoId(id) {

        return this.http.get<any>('/icoraw/'+id);

    }
    public getCryptoId(sym) {

        return this.http.get<any>('/allcrypto/'+sym);

    }

    public incrementView(type, id) {

        return this.http
            .post('/angular/incrementView', {'type': type, 'id': id},{headers: headers})

    }

  public getIcoTop() {
       return this.http.get<any>(this.pathIco);
  }

}
