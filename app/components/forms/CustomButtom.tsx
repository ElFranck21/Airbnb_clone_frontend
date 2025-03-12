interface CustomButtomProps {
    label: string;
    className: string;
    onclick: ()=> void;
}
const CustomButton: React.FC<CustomButtomProps> =({label, onclick, className})=>{
    return(
        <div 
        onClick={onclick}
        className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}>
            {label}
        </div>
    )
}
export default CustomButton;