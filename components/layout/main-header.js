import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";

function MainHeader() {
  const { pathname } = useRouter();
  const { isLoggedIn, getUser } = useAuth();
  return (
  <div className=" shadow-lg sticky top-0 left-0 right-0 bg-[#f8fafc] p-1 h-12 ">
      <header className='container flex flex-row justify-between'>
      <div className='ml-16'>
        <Link href="/questions"><h2 className="text-xl font-normal">Code<span className="text-2xl font-semibold">Sol</span></h2></Link>
      </div>
      <nav className='mr-20'>
        <ul className='flex flex-row gap-10'>
          <Link href='/questions/ask/' className="bg-neutral-500 hover:bg-neutral-700 rounded-sm p-2 mt-0 text-white">Post Question</Link>
          {isLoggedIn() ? (
            <div>
              <p>Welcome {getUser().firstname}</p>
            </div>
          ) : (
            <li className="flex flex-row gap-1 justify-evenly">
                <Link href="/login" className="dark:bg-slate-800 text-white bg-gradient-to-l from-purple-500 to-indigo-500 to-transparent rounded-sm p-2">
                  Log In
                </Link>
                <Link href="/register" className="dark:bg-slate-800 text-white bg-gradient-to-r from-cyan-900 to-blue-500 focus-within:shadow-lg rounded-sm p-2">
                  Sign Up
                </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  </div>
    
  );
}

export default MainHeader;
