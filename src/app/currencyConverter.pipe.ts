import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number) {
    return `${(value / 3.5).toFixed(2)} USD`;
  }
}
