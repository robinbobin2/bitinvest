import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
