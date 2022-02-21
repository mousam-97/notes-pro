import React, { useEffect, useState } from 'react';

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const mic = new speechRecognition();

mic.interimResults = true;
mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

function Speechconvert() {

    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        const handleListen = () => {
            if (isListening) {
                mic.start();
                mic.onend = () => {
                    console.log("continue...");
                    mic.start();
                };
            } else {
                mic.stop();
                mic.onend = () => {
                    console.log('Stopped Mic on Cick');
                };
            }

            mic.onstart = () => {
                console.log('Mics on');
            };

            mic.onresult = event => {
                const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
                console.log(transcript);
                setNote(transcript);
                mic.onerror = event => {
                    console.log(event.error);
                };
            };
        };
        handleListen();
    }, [isListening]);

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note]);
        setNote('');
    };

    return (
        <div className="speechconvert">
            <div className="left">
                <h2>Notes</h2>
                <div className="left__panel">

                    {savedNotes.map(n => (
                        <p key={n}>{n}</p>
                    ))}
                </div>
            </div>
            <div className="right">
                <h1>Voice Notes</h1>
                <div className="box">
                    {/* {isListening ? <span>Off</span> : <span>on</span>} */}
                    <div className="buttons">
                        <button onClick={handleSaveNote} disabled={!note}>Save Note</button>
                        <button onClick={() => setIsListening(prevState => !prevState)}>
                            {isListening ? <span>Stop</span> : <span>Start</span>}
                        </button>
                    </div>

                    <p>{note}</p>
                </div>


            </div>

        </div>
    );
}

export default Speechconvert;