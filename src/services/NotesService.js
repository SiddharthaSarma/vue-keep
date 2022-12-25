class NotesService {
  #notes = [];
  addNotes(content) {
    this.#notes.push(content);
  }
  getNotes() {
    return this.#notes;
  }
}
export default new NotesService();
