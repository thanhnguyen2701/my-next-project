'use client';

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/features/userSlice";
import Hello from "@/components/Hello";

const Home = () => {
  const name = useAppSelector((s) => s.user.name);
  const dispatch = useAppDispatch();

  console.log('What type of a component am I?')
  return (
    <main>
      <div className='text-5xl underline'>Welcome to Next.js</div>
      <p>Current user: {name || "None"}</p>
      <button
        onClick={() => dispatch(setUser("Thanh"))}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Set User
      </button>

      <Hello/>
    </main>
  )
}

export default Home