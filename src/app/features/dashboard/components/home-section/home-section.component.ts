import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { IProgramm } from '../../interface/programm';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  ProgramList: IProgramm[] = [];
  proCity?: string;
  constructor(private _MainService: MainService) {

  }
  ngOnInit(): void {
    this.getAllProgramm()
  }
  getAllProgramm() {
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
