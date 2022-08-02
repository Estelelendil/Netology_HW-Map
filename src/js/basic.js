class ErrorRepository {
  constructor() {
    const errMap = new Map([[100, ''], [200, ''], [300, ''], [400, ''], [500, '']]);
  }

  translate(code) {
    return errMap.get(code);
  }
}
