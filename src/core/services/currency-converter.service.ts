import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ConversionRate} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private _currenciesCode: string[] = [
    'ILS',
    'USD',
    'EUR',
    'AUD',
    'CAD',
    'CHF',
    'CNY',
    'GBP',
    'JPY',
    'MXN',
    'NZD',
    'KRW',
    'RUB'
  ];

  get currenciesCode(): string[] {
    return this._currenciesCode;
  }

  constructor(private http: HttpClient) {
  }

  getConversionRate(params: Record<string, any>): Observable<ConversionRate> {
    return this.http.get<ConversionRate>(`${environment.exchangeUrl}`, {params});
  }
}
