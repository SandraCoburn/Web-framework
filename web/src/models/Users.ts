import axios, { AxiosResponse } from 'axios';
// we can make them optional with a ?
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  //property to store events
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }
  //void because it doesn't return anything
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Callback): void {
    //store all events listeners until is time to call them
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }
}
