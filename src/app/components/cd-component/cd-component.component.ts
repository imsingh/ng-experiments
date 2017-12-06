import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-cd-component',
  templateUrl: './cd-component.component.html',
  styleUrls: ['./cd-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdComponentComponent implements OnChanges {
  @Input() myData:any = {};
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('CD: cdComponent');
  }

}
