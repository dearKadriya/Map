import ErrorRepository from './errorRepository';

test('Проверка добавления ошибки в репозиторий', () => {
  const error = { code: 101, description: 'New Error' };
  const firstRep = new ErrorRepository();
  const result = firstRep.setToRepository(error);
  expect(result).toEqual(new Map([[101, 'New Error']]));
});

test('Проверка получения описания ошибки', () => {
  const error = { code: 101, description: 'New Error' };
  const firstRep = new ErrorRepository();
  firstRep.setToRepository(error);
  const result = firstRep.translate(101);
  expect(result).toBe('New Error');
});

test('Проверка выдачи исключения если нет записи об ошибке', () => {
  const firstRep = new ErrorRepository();
  expect(() => { firstRep.translate(101); }).toThrowError('Unknown error');
});
