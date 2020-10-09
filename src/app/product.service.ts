import { Injectable } from '@angular/core';

import { from } from 'rxjs/observable/from';

import { Http, Response } from '@angular/http';

import { map } from 'rxjs/add/operator/map';

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
