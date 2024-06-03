import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { IProgramm } from '../../interface/programm';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.scss']
})
export class LowerHeaderComponent implements OnInit {
  ProgramList: IProgramm[] = [];

  constructor(private _MainService: MainService) { }
  ngOnInit(): void {
    this._MainService.getAll().subscribe({
      next: (res) => {
        this.ProgramList = res;
        console.log(this.ProgramList);
      }, error(err) {

      }, complete() {

      },
    })
  }
}
