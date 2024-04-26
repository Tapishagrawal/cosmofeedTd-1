import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const { akashAuth, vikashAuth, user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            navigate("/greet");
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div>
            {
                akashAuth && <div>
                    <h1>Hy, {user?.username[0].toUpperCase()+user?.username.slice(1)}</h1>
                    <a href='https://cosmofeed.com/signin' target='_blank' onClick={handleClick}>Click</a>
                </div>
            }
            {
                vikashAuth && <div>
                    <h1>Hy, {user?.username[0].toUpperCase()+user?.username.slice(1)}</h1>
                    <a href='https://cosmofeed.com/signin' target='_blank' onClick={handleClick}>Click</a>
                </div>
            }
            {
                isLoading && <h1>Loading...</h1>
            }
        </div>
    )
}
