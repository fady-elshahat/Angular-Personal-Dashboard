
import { v4 as uuidv4 } from 'uuid';

export class Todos{
  id: string;
  completed!: boolean;
  constructor(public text : string) {
    this.id = uuidv4()
  }
}
