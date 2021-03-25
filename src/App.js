import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm'
const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="3293b13e-cdb2-4aed-abec-b8aec91eaa46"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;