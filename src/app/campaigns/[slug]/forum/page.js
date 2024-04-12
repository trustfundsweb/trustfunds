"use client";

import { getMessagesAPI } from "@/axios";
import Text from "@/components/Message/input";
import Message from "@/components/Message/message";
import { useCampaignDetailContext } from "@/context/CampaignContext";
import { useEffect, useState } from "react";

const Page = () => {
  const { status, campaignData } = useCampaignDetailContext();
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="m-6 flex h-screen flex-col gap-6">
      <h1 className="text-center text-3xl font-semibold">
        Welcome To TrustFunds Community Forum!
      </h1>
      <div className="flex flex-row">
        <div className="w-1/2">
          {messages.map((msg, index) => (
            <Message key={index} data={msg} />
          ))}
        </div>
        <div className="flex h-full w-1/2 flex-col items-center ">
          <Text addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default Page;