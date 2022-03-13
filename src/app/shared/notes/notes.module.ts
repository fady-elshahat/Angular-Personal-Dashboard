import { v4 as uuidv4 } from 'uuid';

export class Notes {

  id: string;
  constructor(public title: string, public content: string) {
    this.id = uuidv4();
  }
}
