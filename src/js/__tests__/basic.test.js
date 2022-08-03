import ErrorRepository from '../basic';

describe('Team test', () => {
  let result;
  let newErr;

  beforeEach(() => {
    newErr = new ErrorRepository();
  });

  test('error 100', () => {
    result = 'Требуется продолжение запроса';

    expect(result).toBe(newErr.translate(100));
  });

  test('error 200', () => {
    result = 'Успешный запрос';

    expect(result).toBe(newErr.translate(200));
  });

  test('error 300', () => {
    result = 'Переключение протокола';

    expect(result).toBe(newErr.translate(300));
  });

  test('error 400', () => {
    result = 'Синтаксическая ошибка';

    expect(result).toBe(newErr.translate(400));
  });

  test('error 500', () => {
    result = 'Запрос не выпонен из-за непредвиденныхх условий';

    expect(result).toBe(newErr.translate(500));
  });

  test('error Unknown error', () => {
    result = 'Unknown error';

    expect(result).toBe(newErr.translate(1000));
  });
});
