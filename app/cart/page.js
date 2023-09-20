'use client'

import CartItem from "../components/CartItem";
import SimilarProducts from "../components/SimilarProducts";
import MainLayout from "../layouts/MainLayout";

const Cart = () => {

    const product = {
        id: 1,
        title: "Brownnn",
        description: "yeyeyeye",
        url: "https://picsum.photos/id/7",
        price: 2500
    }

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">My cart</div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <div className="w-[65%]">
                            <CartItem product={product} />
                        </div>

                        <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                            <div className="bg-white p-4 border">

                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <div>Items (3) </div>
                                    <div>£12.99</div>
                                </div>

                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Shipping:</div>
                                    <div>Free</div>
                                </div>

                                <div className="border-b border-gray-300"/>

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <div>Subtotal</div>
                                    <div>£12.99</div>
                                </div>

                                <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                                    Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <SimilarProducts />
            </MainLayout>
        </>
    );
}

export default Cart;