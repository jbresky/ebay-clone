'use client'

import TextInput from "../components/TextInput";
import MainLayout from "../layouts/MainLayout";

const Address = () => {
    return ( 
        <>
            <MainLayout>
                <div id="AddressPage" 
                className="mt-4 max-w-[600px] mx-auto px-2">
                    <div className="mx-auto bg-white rounded-lg p-3">
                        <div className="text-xl text-bold mb-2">
                            Address Details
                        </div>

                        <form>
                            <div className="mb-4">
                                <TextInput
                                    className="w-full"
                                    string={'TEST'}
                                    placeholder="Name"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
     );
}
 
export default Address;