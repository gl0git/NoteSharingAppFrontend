import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Buffer} from 'buffer'
import '../App.css' 

function NotePage() {

  const { id } = useParams()
  const [PDF, setPDF] = useState()
  
  useEffect(() => {
    fetch(`https://shrouded-everglades-43691.herokuapp.com/note/${id}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    .then(response => response.json())
    .then(responseJSON => { 
      setPDF(responseJSON.note.pdf.data)
    })
  }, [])

  const pdfuint8 = new Uint8Array(PDF)
  const base64 = Buffer.from(pdfuint8).toString('base64')

  return (
    <div className="note-view-page">
      <embed src={`data:application/pdf;base64,${base64}`} type="application/pdf" width='100%' height='100%'></embed>
    </div>
  );
}

export default NotePage;




