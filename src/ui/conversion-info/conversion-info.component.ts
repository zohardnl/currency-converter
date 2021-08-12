import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-conversion-info',
  templateUrl: './conversion-info.component.html',
  styleUrls: ['./conversion-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionInfoComponent implements OnInit {
  @Input() convertText:string;

  constructor() { }

  ngOnInit(): void {
  }

}
