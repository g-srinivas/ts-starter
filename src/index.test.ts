import { contains, map, filter, reduce, unique } from './index';

// map function Test cases
describe('function map<T, U>', () => {
  it('should return [] if input is []', () => {
    expect(map<number, number>(x => x * 2)([])).toEqual([]);
  });

  it('should not modify input', () => {
    const input = [1, 2, 3, 4];
    const actual = map<number, number>(x => x * 2)(input);
    expect(actual).toEqual([2, 4, 6, 8]);
    expect(input).toEqual([1, 2, 3, 4]);
  });

  it('should work with proudct types', () => {
    type Emp = { name: string; salary: number };
    const input = [{ name: 'srinu', salary: 56 }, { name: 'siva', salary: 5 }];
    const expected = ['srinu', 'siva'];
    expect(map<Emp, string>(x => x.name)(input)).toEqual(expected);
  });

  it('map should return mapped values', () => {
    const input = [1, 2, 3, 5];
    const expected = [2, 4, 6, 10];
    expect(map<number, number>(x => x * 2)(input)).toEqual(expected);
  });

  it('map should return data type other than input datatype', () => {
    const input = [1, 2, 3, 5];
    const expected = ['1', '2', '3', '5'];
    expect(map<number, string>(x => x.toString())(input)).toEqual(expected);
  });
});

// filter function Test cases
describe('function filter<T>', () => {
  type Emp = { name: string; salary: number };

  it('should return [] if input is []', () => {
    expect(filter(x => x > 5)([])).toEqual([]);
  });

  it('should not modify input values', () => {
    const isEven = (x: number) => x % 2 === 0;
    const input = [1, 2, 3, 4];
    const expected = [2, 4];
    const actual = filter(isEven)(input);
    expect(actual).toEqual(expected);
    expect(input).toEqual([1, 2, 3, 4]);
  });

  it('should return filtered values', () => {
    const isEven = (x: number) => x % 2 === 0;
    const input = [1, 2, 3, 4];
    const expected = [2, 4];
    expect(filter(isEven)(input)).toEqual(expected);
  });

  it('should work with proudct types', () => {
    const input = [{ name: 'srinu', salary: 56 }, { name: 'siva', salary: 5 }];
    const expected = [{ name: 'srinu', salary: 56 }];
    expect(filter<Emp>(x => x.salary > 10)(input)).toEqual(expected);
  });
});

// reduce function Test cases
describe('function reduce<T, U>', () => {
  it('should return initial seed  for input []', () => {
    expect(reduce<number, number>((x, y) => x + y)(0, [])).toEqual(0);
  });

  it('should return result', () => {
    expect(reduce<number, number>((x, y) => x + y)(0, [1, 2, 3, 4, 5])).toEqual(
      15
    );
  });

  it('should sum up salaries on Emp', () => {
    type Emp = { name: string; salary: number };
    const input = [{ name: 'srinu', salary: 56 }, { name: 'siva', salary: 5 }];
    const expected = 61;
    expect(reduce<Emp, number>((x, y) => x + y.salary)(0, input)).toEqual(
      expected
    );
  });
});

describe('function contains<T>', () => {
  it('should return false for []', () => {
    expect(contains(x => x === 7)([])).toBeFalsy();
  });
  it('should return true if element exists', () => {
    expect(contains(x => x === 2)([1, 2, 3])).toBeTruthy();
  });

  it('should return false if element not exists', () => {
    expect(contains(x => x === 8)([1, 2, 3])).toBeFalsy();
  });

  it('should work with product types', () => {
    type Emp = { name: string; salary: number };
    const input = [{ name: 'srinu', salary: 56 }, { name: 'siva', salary: 5 }];
    expect(
      contains<Emp>(x => x.name === 'srinu' && x.salary === 56)(input)
    ).toBeTruthy();
  });
});

// unique function Test cases
describe('function unique<T>', () => {
  it('should return [] if input is []', () => {
    expect(unique<number>([])).toEqual([]);
  });
  it(' should return unique values', () => {
    expect(unique<number>([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
