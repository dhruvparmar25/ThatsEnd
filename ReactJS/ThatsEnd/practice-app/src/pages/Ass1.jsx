import UserCard from '../components/UserCad';
import {users} from '../data/users'
export default function Ass1(){
    return(
        <div className='flex justify-center items-center p-6  px-2 m-auto'>
        <div className=' w-full'>
        <h2 className='text-2xl font-bold mb-6 text-center m-auto'>Assignment 1:User Profiels</h2>
        <div className="grid grid-cols-2 m-auto sm:grid-cols-2 md:grid-cols-6 gap-4 items-center justify-center">
            {users.map((user)=>(
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
        </div>
        </div>
    )
}