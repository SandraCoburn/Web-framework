// we can make them optional with a ?
interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }
  //void because it doesn't return anything
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
