import { default as AbstractNoteRepository } from "./AbstractNoteRepository";

import { promisify } from 'util';
import * as fs from 'fs';
import Note from "./entities/note";
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

/**
 * Concretion of the `AbstractNoteRepository` that stores Note entities
 * in the local computer file system
 */
class FileSystemNoteRepository extends AbstractNoteRepository {

  /**
   * Creates a Note with the specified properties
   * @abstract
   * @param {string} content The content of the Note
   * @param {string} path The URI of the Note
   * @returns {Note} The created Note
   */
  async create(content, path) {
    const newNote = new Note(content, path);
    await writeFile(path, content);
    return newNote;
  }

  /**
   * Gets a Note with the specified URI, if it exists
   * @abstract
   * @param {string?} path The path of the Note to get
   * @returns {Promise<Note || null>} A promise that resolves with the created Note
   */
   getNoteAtURI(path) {
    throw new Error("Not implemented");
  }

  /**
   * Deletes a Note at the specified URI
   * @abstract
   * @param {string?} uri The URI of the Note to delete
   * @returns {Promise<void>} when the operation settles
   */
  deleteNoteAtURI(uri) {
    throw new Error("Not implemented");
  }

}

export default FileSystemNoteRepository;
