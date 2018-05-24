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
        if (filterString instanceof Array) {
            console.log('array!')
            for (let str of filterString)  {
                console.log('gopush!')

                if(item[propName] == str) {
                    resultArray.push(item)
                }
            }
        }
        if(item[propName] == filterString) {
            resultArray.push(item)
        }
    }
    return resultArray;
  }

}
