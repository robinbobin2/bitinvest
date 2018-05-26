import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameActive',
  pure: false
})
export class FilterNameActivePipe implements PipeTransform {


  transform(value: any, filterString: any, propName:string): any {
    if(filterString === undefined || value.length === 0 || filterString === '') {
        return value;
    }
    const resultArray = [];
    for (const item of value) {
        if (filterString == 'both') {
            if(item[propName] == 1) {
                resultArray.push(item)
            } else {
                if(item[propName] == 3) {
                    resultArray.push(item)
                }
            }
        } else {
            if (item[propName] == filterString) {
                resultArray.push(item)
            }
        }
    }
    return resultArray;
  }

}
