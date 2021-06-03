export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  setToRepository(error) {
    this.errors.set(error.code, error.description);
    return this.errors;
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } throw new Error('Unknown error');
  }
}
