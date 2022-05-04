import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, Formik } from "formik";
import NoteCard from './note';

const App = () => {

  const [ notes, setNotes ] = useState([]);

  const handleSubmit = async values => {
    const savedNote = await window.appContext.saveNote(values.content);
    if (savedNote) {
      setNotes(old => [...old.filter(n => n.path != savedNote.path), savedNote]);
    }
  }

  return (
    <>
      <h1>Notebook</h1>
      <Formik
        initialValues={{
          content: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="content">Note Content</label>
          <Field as="textarea" name="content"
            placeholder='Note content'
            validate={val => !val ? "Content is required" : ""}
            />
          <div className="error-message">
            <ErrorMessage name="content" />
          </div>

          <button className="button-primary" type="submit">
            Create
          </button>
        </Form>
      </Formik>

      { notes.length ? (
        <>
        <h1>Your Notes</h1>
        <div id="notes">
          { notes.map(n => (
            <NoteCard key={n.path} {...n} />
          )) }
        </div>
        </>
      ) : null }
    </>
  )
};

export default App;