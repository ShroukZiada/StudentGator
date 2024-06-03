import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FloatToIntPipe'
})
export class FloatToIntPipePipe implements PipeTransform {


  transform(value: number, currencySymbol: string = 'EUR'): string {
    // Convert float to integer
    const integerNumber: number = Math.floor(value);

    // Slice 1 number
    const currency = String(integerNumber).slice(0, 4);

    // Add currency symbol
    const currencyWithSymbol = currency + currencySymbol;

    return currencyWithSymbol;
  }

}
