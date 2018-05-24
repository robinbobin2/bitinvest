import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameActive',
  pure: false
})
export class FilterNameActivePipe implements PipeTransform {


  transform(value: any, filterString: string, propName:string): any {
    if(filterString === undefined || value.length === 0 || filterString === '') {
        return value;
    }
    const resultArray = [];
    for (const item of value) {
        console.log('item')
        console.log(item)
        console.log(filterString)
        console.log(propName)
        if(item[propName] == filterString) {
            resultArray.push(item)
        }
    }
    return resultArray;
  }

}
