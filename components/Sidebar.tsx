"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRows from "./ChatRows";
import ModelSelection from "./ModelSelection";

const Sidebar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* Model Selections */}</div>

          <div className="hidden sm:inline ">
            <ModelSelection />
          </div>

          {/* Map through the ChatRows */}
          <div className="flex flex-col space-y-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats..</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRows key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profilePic"
          className="rounded-full cursor-pointer h-12 w-12 mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Sidebar;
