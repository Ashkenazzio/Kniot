import paritData, { participant } from './paritData';

class ParitClass {
  id: number;
  title: string;
  sum: number;
  participants: participant[];
  each: number;

  constructor(data: paritData) {
    this.id = Date.now();
    this.title = data.title;
    this.sum = data.sum;
    this.participants = data.participants;
    this.each = data.each;
  }
}

export default ParitClass;
