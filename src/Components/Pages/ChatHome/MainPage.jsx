import { useState } from "react";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatPage";

const MainPage = () => {
   
 const [user, setUser] = useState(undefined);

if (!user) {
  return <AuthPage onAuth={(user) => setUser(user)} />;
} else {
  return <ChatsPage user={user} />;
}       
     
}

export default MainPage;