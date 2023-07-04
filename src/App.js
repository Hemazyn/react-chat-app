import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import LoginForm from "./component/LoginForm";
import ChatFeed from "./component/ChatFeed";

const projectID = '26d22d91-5330-4b98-8dfc-34c15c677047';

const App = () => {
     if (!localStorage.getItem('username')) return <LoginForm />
     return (
          <ChatEngine
               height="100vh"
               projectID={projectID}
               userName={localStorage.getItem('username')}
               userSecret={localStorage.getItem('password')}
               renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          />
     );
}
export default App;
