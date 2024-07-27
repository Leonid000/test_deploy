import { useState } from 'react';

function App() {
    const [array, setArray] = useState([]);
    const [input, setInput] = useState();

    const sendMessage = () => {
        setArray([input, ...array]);
        setInput('');
    };
    return (
        <div className=' h-[100vh] bg-black/20 py-[20px]'>
            <div className=" max-w-[1200px] m-auto ">
                <input value={input} onChange={(event) => setInput(event.target.value)} 
                className="border border-black/30 bg-green-600/50" type="text" />
                <button onClick={sendMessage} className="border bg-green-600/50 border-black/30">
                    Отправить
                </button>

                <div>
                    {array.map((message) => {
                        return <div className='bg-slate-500'>{message}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
