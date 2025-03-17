'use client';

import Modal from "./Modal";
import { useState } from "react"; 
import CustomButton from "../forms/CustomButtom";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = ()=>{
    const SignupModal= useSignupModal()

    const content=(
        <>
            <h2 className="mb-6 text-2xl">
            </h2>
            <form className="space-y-4">
                <input placeholder="Your email" type="email" className="w-full h-[54px] px-4 boder border-gray-300 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 boder border-gray-300 rounded-xl" />
                <input placeholder="Repeate password" type="password" className="w-full h-[54px] px-4 boder border-gray-300 rounded-xl" />
                
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="submit"
                    onclick={() => console.log('hola')} className={""}                    />
            </form>
        </>
    )
    return(
        <Modal
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Sign up"
            content={content}
            />
    )
}
export default SignupModal; 