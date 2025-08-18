export const users = [
  { id: 1, name: 'Alice', age: 25, online: true, src: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, name: 'Bob', age: 30, online: false, src: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, name: 'Charlie', age: 25, online: true, src: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'David', age: 28, online: false, src: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: 5, name: 'Eve', age: 25, online: true, src: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: 6, name: 'Frank', age: 22, online: true, src: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: 7, name: 'Grace', age: 31, online: false, src: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: 8, name: 'Hannah', age: 26, online: true, src: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 9, name: 'Ivy', age: 27, online: false, src: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: 10, name: 'Jack', age: 32, online: true, src: 'https://randomuser.me/api/portraits/men/10.jpg' }
];
// Active/Inactive arrays
export const activeUsers   = users.filter(u => u.online);
export const inactiveUsers = users.filter(u => !u.online);