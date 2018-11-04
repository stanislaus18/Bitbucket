import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcabs'
})
export class SearchpipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    let totalItems = items.filter( input => {
      return input.address.toLowerCase().includes(searchText);
    });
    return totalItems.length > 0 ? totalItems : [{address : 'No Result Found'}] ;
   }
}
