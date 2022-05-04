import React, { useEffect } from 'react';

const App = () => {
  const handlePing = async (e) => {
    e.preventDefault();
    console.log('SAVING');
    const savedNote = await window.appContext.saveNote("Note content");
    console.log(savedNote);
  }
  
  useEffect(() => {
    // window.appContext.onPingReceive(data => alert(data))
  }, []);

  return (
    <>
    <h1>Notebook</h1>
    <button onClick={handlePing}>Ping</button>
    </>
  )
};

export default App;