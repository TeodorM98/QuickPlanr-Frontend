import HeaderFooterContainer from "../components/HeaderFooterContainer";
import RegisterForm from "../components/RegisterForm";
import img from "../../public/istockphoto-916563360-612x612.jpg"

export default function RegisterPage(){
    return(
        <HeaderFooterContainer>
            <div className="flex flex-row justify-evenly min-w-full">
            <img src={img} className="min-h-max min-w-max" />
            <RegisterForm />
            </div>
        </HeaderFooterContainer>
    )
}