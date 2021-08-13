import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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

  convertText$: Observable<string>;

  constructor(private currencyPipe: CurrencyPipe, private converterService: CurrencyConverterService) {
  }

  ngOnInit() {
    this.currenciesCode = this.converterService.currenciesCode;
    this.convertText$ = this.converterService.convertedText$;
  }

  ngAfterViewInit() {
    this.registerValueChanges();
  }

  registerValueChanges() {
    this.formGroup.valueChanges.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((formValue: Record<string, any>) => {
        return this.getConversionRateResults(formValue.amount);
      }),
      untilDestroyed(this)
    ).subscribe();
  }

  getConversionRateResults(amount: number): Observable<never> | Observable<ConversionRate> {
    let resultObs$: Observable<never> | Observable<ConversionRate> = EMPTY.pipe(ignoreElements());

    if (!amount) {
      this.converterService.convertingText = '';
      return resultObs$;
    } else {
      const {from, to, amount} = this.formGroup.value;

      if (from === to) {
        this.converterService.convertingText = this.prepareConvertingText(amount, amount, from, to);

        return resultObs$;

      } else {
        this.params = {
          amount,
          from,
          to
        };

        resultObs$ = this.converterService.getConversionRate(this.params).pipe(
          tap((data: ConversionRate) => {
            this.converterService.convertingText = this.prepareConvertingText(amount, data.rates[to], from, to);
          }),
          catchError(err => {
            this.converterService.convertingText = 'An error has occurred';
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

  trackByIndex(index: number, item: string) {
    return index;
  }
}
