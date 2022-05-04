
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

}

export default AbstractNoteRepository;
