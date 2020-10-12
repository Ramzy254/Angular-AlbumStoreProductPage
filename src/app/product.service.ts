import { Injectable } from '@angular/core';

import { from } from 'rxjs/observable/from';

import { Http, Response } from '@angular/http';

import { Map } from 'rxjs/add/operator/map';

import './album';

import { Product } from './product';

import { Observable } from 'rxjs/Observable';

import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  private _productsUrl: string = '../assets/products.json';
  constructor(private _http: Http) {

  };

  getAlbum (id: number): Observable<Album> {

    return this._http.get(this._albumUrl).map((response) =>
    <Album>response.json());

  }

  getProducts() {
    return this._http.get(this._productsUrl).map((response) =>
    response.json())
  }

}
