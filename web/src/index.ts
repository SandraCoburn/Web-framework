import { User } from './models/Users';

const user = new User({ name: 'myname', age: 20 });
user.set({ name: 'newname' });
user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('save', () => {
  console.log('Save was triggered');
});
user.trigger('change');

console.log(user);
// console.log(user.get('age'));
