import { CurrencyDollarIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import {addToBasket , removeFromBasket} from "../slices/basketSlice"

function CheckoutProduct({id , title , price , description , category , rating,  image , hasPrime,}) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id , title , price , description , category , rating,  image , hasPrime,
        };
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        //remove the item from redux
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5" >
            <Image className="object-contain"  src={image} height={200} width={200 }    />
            {/* middle */}
            <div className="col-span-3 mx-5">
                <p> {title} </p>
                <div className="flex" >
                    {Array(rating).fill().map((_,i)=> (
                        <StarIcon key={i} className="h-5 text-yellow-500 " />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3" >{description}</p>
                <p className="flex" >   <CurrencyDollarIcon width={25} /> {price} </p>
                {/* {hasPrime && (
                    <div className="flex items-center space-x-2" >
                        <img loading="lazy" className="w-12"  src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-50" > FREE Next-day Delivery</p>
                    </div>
                )} */}
            </div>
            {/* right add/remove button */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end " >
                <button className="button" onClick={addItemToBasket} >add to basket</button>
                <button className="button" onClick={removeItemFromBasket} >remove from  basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
