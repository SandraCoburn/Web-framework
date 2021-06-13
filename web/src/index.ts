import { User } from './models/Users';
import axios from 'axios';

// const user = new User({ name: 'myname', age: 20 });
// user.set({ name: 'newname' });
// user.on('change', () => {
//   console.log('change 1');
// });
// user.on('change', () => {
//   console.log('change 2');
// });
// user.on('save', () => {
//   console.log('Save was triggered');
// });
// user.trigger('change');

// console.log(user);
// // console.log(user.get('age'));

axios.post('http://localhost:3000/users', { name: 'myName', age: 30 });
axios.get('http://localhost:3000/users/1');
