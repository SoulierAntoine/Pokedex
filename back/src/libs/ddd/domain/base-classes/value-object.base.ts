export class ValueObject<T> {
  protected readonly props: T;

  constructor(props: T) {
    this.props = props;
  }

  equals(vo: T): boolean {
    return JSON.stringify(this) === JSON.stringify(vo);
  }
}
