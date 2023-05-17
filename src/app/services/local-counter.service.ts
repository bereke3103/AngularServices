export class LocalServiceCounter {
  counter: number = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
