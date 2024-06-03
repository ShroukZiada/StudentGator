import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FloatToIntPipePipe } from '../../dashboard/pipe/FloatToIntPipe.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    FloatToIntPipePipe,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCardModule,
    HttpClientModule,
    MatTooltipModule

  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FloatToIntPipePipe,
  ]
})
export class SharedModule { }
