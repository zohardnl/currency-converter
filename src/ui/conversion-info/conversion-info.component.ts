import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-conversion-info',
  templateUrl: './conversion-info.component.html',
  styleUrls: ['./conversion-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionInfoComponent {
  @Input() convertText: string;

  constructor() {
  }
}
