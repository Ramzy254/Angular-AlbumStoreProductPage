import { Injectable } from '@angular/core';

import { from } from 'rxjs/observable/from';

import { Http, Response } from '@angular/http';

import { map } from 'rxjs/add/operator/map';

import './album';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) {

  };

  getAlbum: Observable<Album> (id: number) {

    return this._http.get(this._albumUrl).map((response) =>
    response.json());

  };

}
