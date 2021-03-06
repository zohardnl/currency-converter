import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {ConversionRate} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private readonly _currenciesCode: string[] = [
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
  private readonly _convertingText: Subject<string> = new Subject<string>();
  private readonly _storageKey: string = 'history';
  private _conversionHistory: string[] = [];

  get currenciesCode(): string[] {
    return this._currenciesCode;
  }

  get convertedText$(): Observable<string> {
    return this._convertingText.asObservable();
  }

  get conversionHistory(): string[] {
    return this._conversionHistory;
  }

  set convertingText(val: string) {
    this._convertingText.next(val);

    if (val) {
      this.addToHistory(val);
    }
  }

  constructor(private http: HttpClient) {
    const history: string[] = JSON.parse(localStorage.getItem(this._storageKey));

    if (history?.length) {
      this._conversionHistory = [...history];
    }
  }

  getConversionRate(params: Record<string, any>): Observable<ConversionRate> {
    return this.http.get<ConversionRate>(`${environment.exchangeUrl}`, {params});
  }

  addToHistory(conversion: string) {
    this._conversionHistory.push(conversion);
    localStorage.setItem(this._storageKey, JSON.stringify(this._conversionHistory));
  }
}
