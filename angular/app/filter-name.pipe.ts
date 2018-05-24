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
    const resultArray = [];
    for (const item of value) {
    	if(item[propName].toLowerCase().includes(filterString.toLowerCase())) {
    		resultArray.push(item)
    	}
    }
    resultArray['count'] = resultArray.length;
    return resultArray;
  }

}
