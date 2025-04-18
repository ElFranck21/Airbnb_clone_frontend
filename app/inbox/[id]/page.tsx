import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { getUserId } from "@/app/lib/actions";
import React, {useState, useEffect} from 'react';
import { Usertype } from "../page";

export type MessageType ={
    id: string;
    name: string;
    body: string;
    conversation: string;
    sent_to:Usertype;
    created_by:Usertype

}

const ConversationPage =async ()=>{
    const userId = await getUserId();
    
        if(!userId){
            return(
                <main className="max-w-[1500px] max-auto px-6 py-12">
                    <p>You need to be authenticated...</p>
                </main>
            )
        }

    return(
        <main className="max-w-[1700px] mx-auto px-6 pb-6">
            <ConversationDetail/>
        </main>
    )
}
export default ConversationPage;

// set up web sockets in the hour 10 ends