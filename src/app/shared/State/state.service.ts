import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}
  saveState(arr: object[], name: string) {
    localStorage.setItem(name, JSON.stringify(arr));
  }
  loadState(nameArray: string, list: object[]) {
    try {
      const inStorage = JSON.parse(localStorage.getItem(nameArray) || "{}");
      if (!inStorage) return;
      list.length = 0
      list.push(...inStorage);

    } catch (e) {
      console.log('There was an error retrieving the todos from localStorage');
      console.log(e);
    }
  }
}
