import { Component, OnInit, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

// export class User {
//   constructor(
//     public firstname: string,
//     public lastname: string,
//     public selected?: boolean
//   ) {
//     if (selected === undefined) {
//       selected = false;
//     }
//   }
// }

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent<T> implements OnInit {
  elementFormControl = new FormControl();

  @Input() dataArray: T[];
  @Input() param: string;
  @Input() tableHeads: any[];
  @Input() tableData: any[];

  tableHeadsCopy = [];
  selectedItems: T[] = new Array<T>();

  filteredItems: Observable<T[]>;
  lastFilter: string = '';

  ngOnInit() {
    this.filteredItems = this.elementFormControl.valueChanges.pipe(
      startWith<string | T[]>(''),
      map((value) => (typeof value === 'string' ? value : this.lastFilter)),
      map((filter) => this.filter(filter))
    );
    this.tableHeadsCopy = this.tableHeads;
  }

  filter(filter: string): T[] {
    this.lastFilter = filter;
    if (filter) {
      return this.dataArray.filter((option) => {
        return (
          option[this.param].toLowerCase().indexOf(filter.toLowerCase()) >= 0
        );
      });
    } else {
      return this.dataArray.slice();
    }
  }

  displayFn(value: T[] | string): string | undefined {
    let displayValue: string;
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (index === 0) {
          console.log(item, this.param, item[this.param]);
          displayValue = item[this.param];
        } else {
          displayValue += ', ' + item[this.param];
        }
      });
    } else {
      displayValue = value;
    }
    return displayValue;
  }

  optionClicked(event: Event, item: T) {
    event.stopPropagation();
    this.toggleSelection(item);
  }

  toggleSelection(item: T) {
    item['selected'] = !item['selected'];
    if (item['selected']) {
      this.selectedItems.push(item);
    } else {
      const i = this.selectedItems.findIndex(
        // (value) => value[this.param] === item[this.param]
        (value) => value[this.param] === item[this.param]
      );
      this.selectedItems.splice(i, 1);
    }

    this.elementFormControl.setValue(this.selectedItems);
    this.itemSelectedAction(this.selectedItems);
  }

  itemSelectedAction(items: any[]): void {
    console.log(items);
    this.tableHeadsCopy = this.tableHeads
      .slice()
      .filter((el) => items.some((i) => i.id === el.id));
  }
}
