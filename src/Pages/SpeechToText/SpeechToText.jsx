// import { result } from "lodash-es";
import useClipboard from "react-use-clipboard";
import { useEffect, useState } from "react";
import './SpeechToText.css';
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new window.SpeechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';


const SpeechToText = () => {
    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);
    const [isCopied, setCopied] = useClipboard(savedNotes);

    useEffect(() => {
        handleListen()
    }, [isListening])
    const handleListen = () => {
        if (isListening) {
            mic.start();
            mic.onend = () => {
                console.log('continue...')
                mic.start()
            }
        }
        else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped mic on click')
            }
        }
        mic.onstart = () => {
            console.log('mic is on')
        }
        mic.onresult = (event) => {
            const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
            console.log(transcript)
            setNote(transcript)
        }
    }

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    const handleReset = () => {
        setSavedNotes([])
        setCopied('')
        console.log(isCopied)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 ">
            <div >
                <h1 className="text-center text-4xl font-bold mt-4 text-white">Create Your Note with Speech</h1>
                <div className="container ">
                    <div className="box bg-amber-100">
                        <div className="flex justify-between">
                            <div>
                                <h2>Current Note</h2>
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={handleSaveNote} disabled={!note}>
                                    Save Note
                                </button>
                                <button className="btn btn-secondary mx-2 px-4" onClick={() => setIsListening(prevState => !prevState)}>
                                    {isListening ? 'Stop mic' : 'Start mic'}
                                </button>
                            </div>
                        </div>
                        {isListening ? <span>🎙️<span className="loading loading-dots loading-xs"></span></span> : <span>🛑🎙️</span>} <p>{note}</p>
                    </div>
                    <div className="box bg-amber-100">
                        <div className="flex justify-between">
                            <h2>Notes</h2>
                            {savedNotes.length ?
                                <div>
                                    <button className="btn btn-success" onClick={setCopied} >
                                        Copy
                                    </button>
                                    <button className="btn btn-warning mr-2" onClick={handleReset}>Reset Note</button>
                                </div> : ''
                            }
                        </div>
                        {savedNotes.map(n => (
                            <p key={n}>{n}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeechToText;