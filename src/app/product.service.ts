import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Http, Responce } from '@angular/http';



@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) {

  };

  getAlbum(id: number) {
    const result = this._http.get(this._albumUrl);
    return result;

  };

}
