'use client';  
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyProps{
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyProps> = ({
    userId
})=>{
    const loginModal= useLoginModal();
    const addPropertyModal= useAddPropertyModal();
    const airbnbYourHome= ()=>{
        if (userId){
        addPropertyModal.open()
    }else {
        loginModal.open();
    }
}
    return(
        <div 
            onClick={airbnbYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
            DjangoBnb home
        </div>
    )
}
export default AddPropertyButton;