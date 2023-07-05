import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
 
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;

//https://chatengine.io/docs/react/v2/getting_started
//https://blog.chatengine.io/fullstack-chat/nodejs-reactjs