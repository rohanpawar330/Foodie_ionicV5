import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand'
})
export class ThousandPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return Math.abs(value) > 999 ? Math.sign(value) * (+(Math.abs(value) / 1000).toFixed(1)) + 'k' : Math.sign(value) * Math.abs(value)

  }

}
