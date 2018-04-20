import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameAge'
})
export class FilterNameAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
