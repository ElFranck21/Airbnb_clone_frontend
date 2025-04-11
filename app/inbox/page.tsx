import { getUserId } from "../lib/actions";
import Conversation from "../components/inbox/Conversation";
import apiService from "../services/apiService";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export type Usertype={
    id: string,
    name: string,
    avatar_url:string,
}

export type ConversationType={
    id: string,
    users: Usertype[];
}



const InboxPage = async ()=>{
    const userId = await getUserId();

    if(!userId){
        return(
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>You need to be authenticated...</p>
            </main>
        )
    }

    const conversations = await apiService.get('/api/chat/')
    
    return(
        <main className="max-w-[1700px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>
            {conversations.map((conversation: ConversationType)  =>{
                return(
                    <Conversation
                        userId={userId}
                        key={conversation.id}
                        conversation={conversation}
                    />
                )
            })}
            
        </main>
    )
}
export default InboxPage;