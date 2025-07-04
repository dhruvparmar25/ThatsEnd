// src/pages/Active.jsx
import UserCard from '../components/UserCad';
import { activeUsers } from '../data/users';

export default function Active() {
  return (
    <div className="p-6 flex-grow bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Active Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
