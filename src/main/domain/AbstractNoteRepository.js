
/**
 * Describes the operations that must be performed on
 * domain Note entities
 * @abstract
 */
class AbstractNoteRepository {
  /**
   * Creates a Note with the specified properties
   * @abstract
   * @param {string} content The content of the Note
   * @param {string} path The URI of the Note
   * @returns {Promise<Note>} A Promise that resolves with the created Note
   */
  create(content, path) {
    throw new Error("Not implemented");
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

export default AbstractNoteRepository;
