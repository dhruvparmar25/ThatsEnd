import UserCard from '../components/UserCad';
import {users} from '../data/users'
export default function Ass1(){
    return(
        <div className='flex justify-center items-center min-h-[80vh] px-2'>
        <div className=' w-full'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Assignment 1:User Profiels</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
            {users.map((user)=>(
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
        </div>
        </div>
    )
}