import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn , signOut , useSession} from "next-auth/client"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function header() {
  const [ session ] = useSession();
  const router = useRouter()
  const items = useSelector(selectItems)
  return (
    <header>
      {/* top */}
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue ">
        <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            onClick={()=> router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className=" cursor-pointer"
          />
        </div>
        {/* search */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            type="text"
            className=" p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none "
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center  whitespace-nowrap mx-6 text-xs space-x-6 ">
          <div onClick={ !session ? signIn : signOut}  className="link" >
            <p>
              {session ? `Welcome, ${session.user.name} ` : `do that damn sign In  man`   }
            </p>
            <p className=" font-extrabold" >Account & List</p>
          </div>
          <div className="link" >
            <p> Returns  </p>
            <p className=" font-extrabold" >& Orders</p>
          </div>
          <div onClick={()=> router.push("/checkout")} className="link relative flex items-center " >
              <span className=" absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold  text-center" > {items.length} </span>
            <ShoppingCartIcon className=" h-8" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
          <p className="link flex items-center" > <MenuIcon className="h-6 mr-1" /> All </p>
          <p className="link"> Prime Video</p>
          <p className="link"> Amazon Business</p>
          <p className="link"> Today's Deals</p>
          <p className=" link hidden lg:inline-flex ">Electronics</p>
          <p className=" link hidden lg:inline-flex ">Food & Grocery</p>
          <p className=" link hidden lg:inline-flex ">Prime</p>
          <p className=" link hidden lg:inline-flex ">Buy Again</p>
          <p className=" link hidden lg:inline-flex ">Shopper</p>
          <p className=" link hidden lg:inline-flex ">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default header;
