import { Component, OnInit } from '@angular/core';
import { EmdataService } from '../emdata.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {

  public arr = [];
  constructor(private _data: EmdataService) { }

  ngOnInit() {
    this.arr = this._data.getEmployees();;
  }
}
