import {Component, ChangeDetectionStrategy, AfterViewInit, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {catchError, debounceTime, distinctUntilChanged, ignoreElements, switchMap, tap} from "rxjs/operators";
import {EMPTY, Observable} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CurrencyConverterService} from "../../../core/services/currency-converter.service";
import {ConversionRate} from "../../../core/models";

@UntilDestroy()
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  providers: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent implements OnInit, AfterViewInit {
  currenciesCode: string[];
  params: Record<string, any>;

  formGroup: FormGroup = new FormGroup({
    amount: new FormControl('', Validators.required),
    from: new FormControl('ILS'),
    to: new FormControl('ILS')
  });

  convertText: string;

  constructor(private currencyPipe: CurrencyPipe, private converterService: CurrencyConverterService) {
  }

  ngOnInit() {
    this.currenciesCode = this.converterService.currenciesCode;
  }

  ngAfterViewInit() {
    this.registerValueChanges();
  }

  registerValueChanges() {
    this.formGroup.get('amount')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: number) => {
        return this.getConversionRateResults(value);
      }),
      untilDestroyed(this)
    ).subscribe();
  }

  getConversionRateResults(value: number): Observable<never> | Observable<ConversionRate> {
    let resultObs$: Observable<never> | Observable<ConversionRate> = EMPTY.pipe(ignoreElements());

    if (!value) {
      this.convertText = '';
      return resultObs$;
    } else {
      const {from, to, amount} = this.formGroup.value;

      if (from === to) {
        this.convertText = this.prepareConvertingText(amount, amount, from, to);
        return resultObs$;

      } else {
        this.params = {
          amount,
          from,
          to
        };

        resultObs$ = this.converterService.getConversionRate(this.params).pipe(
          tap((data: ConversionRate) => {
            this.convertText = this.prepareConvertingText(amount, data.rates[to], from, to);
          }),
          catchError(err => {
            this.convertText = 'An error has occurred';
            throw err;
          })
        );

        return resultObs$;
      }
    }
  }

  prepareConvertingText(amountFrom: number, amountTo: number, fromCode: string, toCode: string): string {
    const fromAmount: string = this.currencyPipe.transform(amountFrom, fromCode, 'symbol');
    const toAmount: string = this.currencyPipe.transform(amountTo, toCode, 'symbol');

    return `${fromAmount} = ${toAmount}`;
  }

  trackByFunc(index: number, item: Record<string, any>) {
    return index;
  }
}
