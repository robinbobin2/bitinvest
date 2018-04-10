import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName',
  pure: false
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, filterString: string, propName:string): any {
    if(filterString === undefined || value.length === 0 || filterString === '') {
    	return value;
    }
    filterString = filterString.toLowerCase();
    const resultArray = [];
    // for (const item of value) {
    // 	if(item[propName].toLowerCase() ===filterString.toLowerCase()) {
    // 		resultArray.push(item)
    // 	}
    // }
    value[propName].filter( it => {
      return it.toLowerCase().includes(filterString);
    });
    // return resultArray;
  }

}
