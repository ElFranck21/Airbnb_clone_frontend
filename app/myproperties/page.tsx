import Image from "next/image";
import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/actions";

const MyPropertiesPage = async ()=>{
    const UserId = await getUserId();
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Properties</h1>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PropertyList
                        landlord_id={UserId}
                    
                    />
                </div>
        </main>
    )
}
export default MyPropertiesPage;