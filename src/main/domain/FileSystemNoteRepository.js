import { default as AbstractNoteRepository } from "./AbstractNoteRepository";

import { promisify } from 'util';
import * as fs from 'fs';
import Note from "./entities/note";
const writeFile = promisify(fs.writeFile);

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

}

export default FileSystemNoteRepository;
