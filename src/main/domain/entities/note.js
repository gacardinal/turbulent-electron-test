/**
 * Represents a 'Note' domain entity
 * @property {string} content The content of the Note
 * @property {string} path The URI of the Note
 */
class Note {
  
  /**
   * Creates an instance of Note
   * @param {string} content The content of the Note
   * @param {string} path The URI of the Note
   */
  constructor(content, path) {
    this.content = content;
    this.path = path;
  }

}

export default Note;
