import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../services/main.service';
import { IProgramm } from '../../interface/programm';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent {
  ProgramList?: any = {};
  proCity?: string;
  id?: string = '';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MainService: MainService) {

  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MainService.getProgramID(this.id).subscribe({
      next: (res) => {
        this.ProgramList = res[0];
        console.log(this.ProgramList);
      }, error(err) {
      }, complete() {
      },
    })

  }
}
