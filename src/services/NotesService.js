class NotesService {
  #notes = [];
  showNotes() {
    console.log(this.#notes);
  }
  addNotes(content) {
    this.#notes.push(content);
    console.log(this.#notes);
  }
  getNotes() {
    return this.#notes;
  }
}
export default new NotesService();
