import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";
const PropertyDetailPage =()=>{
    return(
        <main className="max-w-[1700px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="beach house"
                    
                    />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 Guest - 2 Bedrooms - 1 Bathroom
                    </span>
                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/duki.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="duki profile"
                        />
                        <p><strong>Mauro</strong> is your host</p>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam consequuntur unde quod fuga corporis alias aperiam dolorum autem animi explicabo, aut, odio quisquam, provident nesciunt minus adipisci incidunt ut.</p>
                </div>
                    <ReservationSidebar/>
            </div>
        </main>
    )
}
export default PropertyDetailPage;