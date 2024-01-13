import { deleteContact } from '@/lib/action';
import { getContacts } from '@/lib/data'
import Image from 'next/image'
import React from 'react'



const AdminContact = async () => {
    const information = await getContacts();
  return (
    <div className='flex flex-wrap gap-5 py-3 justify-center items-center'>
      {information.map((post) => (
        <div className="bg-gray-800 flex flex-col h-auto px-5" key={post.id}>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/message1.jpg"
              alt=""
              width={50}
              height={50}
              className="rounded-full mt-2"
            />
            <p className="">{post.name}</p>
            <p className='tex-sm'>{post.email}</p>
            <p className='text-sm'>{post.message}</p>
          </div>
          <div className='flex justify-center items-center py-1 w-full bg-red-600'>
          <form action={deleteContact}>
            <input type="hidden" name="id" value={post.id} />
            <button className="px-2 rounded-md">Delete</button>
          </form>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminContact
