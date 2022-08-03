class ErrorRepository {
  constructor() {
    this.errMap = new Map([[100, 'Требуется продолжение запроса'], [200, 'Успешный запрос'], [300, 'Переключение протокола'], [400, 'Синтаксическая ошибка'], [500, 'Запрос не выпонен из-за непредвиденныхх условий']]);
  }

  translate(code) {
    if (this.errMap.has(code)) {
      return this.errMap.get(code);
    }
    return 'Unknown error';
  }
}

export default ErrorRepository;
