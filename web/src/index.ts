import { User } from './models/Users';

const user = new User({ id: 1 });
user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);
user.set({ name: 'new Name', age: 50 });
user.save();
