import { dialog } from "electron";
import { homedir } from "os";
import * as path from 'path';
import AbstractNoteRepository from "./domain/AbstractNoteRepository";

export class NotesController {
  /**
   * Initializes `NotesController` instance with a given concretion of the
   * `AbstractNoteRepository` abstraction
   * @param {AbstractNoteRepository} notesRepository 
   */
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  /**
   * Handles saving a Note created by the user
   * @param {Electron.IpcMainEvent} e 
   * @param {string} content The content to write to the Note
   */
  handleSaveNote = async (e, content) => {
    console.log(content);
    const result = await dialog.showSaveDialog({
      title: "Save Note",
      defaultPath: path.join(homedir(), `MyNote ${getCurrentDate()}.note`),
      filters: [{ name: "Note files", extensions: [".note"] }],
      properties: ['createDirectory']
    });

    if (!result.canceled) {
      return this.notesRepository.create(content, result.filePath);
    }
  }
}


/**
 * Padds a date component with a leading zero to make it 2 digits long
 * @param {string} dateComponent The date component to pad
 */
function paddDate(dateComponent) {
  return dateComponent.toString().padStart(2, "0");
}

function getCurrentDate() {
  const now = new Date();
  return [
    now.getFullYear(),
    paddDate(now.getMonth() + 1),
    paddDate(now.getDate()),
  ].join('-');
}
