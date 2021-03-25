import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [userName, seTuserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': "3293b13e-cdb2-4aed-abec-b8aec91eaa46", 'User-Name': userName, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});
            // que requerimos si esta conectado correctamente

            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch(error) {
            setError('OOps... incorrect credentials!');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">  
                <h1 className="title"> chatApp</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => seTuserName(e.target.value)} className="input" placeholder="UserName" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>

                    <div align="center">
                        <button type="submit" className="button">
                            <span> Start Chatting </span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;