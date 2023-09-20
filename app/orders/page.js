'use client'

// import Link from "next/link";
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from "../layouts/MainLayout";

const Orders = () => {

    return ( 
        <>
            <MainLayout>
                <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="bg-white w-full p-6 min-h-[150px]">
                    <div className="flex items-center text-xl">
                            <CiDeliveryTruck className="text-green-500" size={35}/>
                            <span className="pl-4">Orders</span>
                        </div>
                    </div>

                </div>
            </MainLayout>
        </>
     );
}
 
export default Orders;