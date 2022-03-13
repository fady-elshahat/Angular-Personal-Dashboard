import { v4 as uuidv4 } from 'uuid';

export class BookMarks {
  id: string;
  url: URL;

  constructor(public name: string ,  url : string) {
    this.id = uuidv4();
    this.url = new URL(url);
  }
}
