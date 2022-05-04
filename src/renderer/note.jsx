import React, { useEffect, useState } from 'react';
import "./style/notecard.css";

function NoteCard(props) {
  return (
    <div className="note">
      <p className="note-content">{ props.content }</p>
      <span className="note-path">{ props.path }</span>
    </div>
  );
}

export default NoteCard;
