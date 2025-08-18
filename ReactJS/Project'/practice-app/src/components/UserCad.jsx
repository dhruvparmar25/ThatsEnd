
export default function UserCard({ user }) {
    return (
        <div className="card bg-white shadow-md rounded-x1 p-4 w-60 text-center hover:scal-105 transition mx-auto">
            <img src={user.src} alt={user.name} className="w-20 h-20 rounded-full mx-auto border-2 border-blue-500 px-2" />
            <h3 className="mt-2 text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">Age :{user.age}</p>
            <p className={`text-sm mt-1 ${user.online ? 'text-green-600' : 'text-red-600'}`}>
                Status: {user.online ? 'Online' : 'offline'}
            </p>

        </div>
    )
}