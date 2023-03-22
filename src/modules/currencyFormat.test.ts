import currencyFormat from "./currencyFormat"

it('should display as $10.00', () => {
    const actual = currencyFormat.format(10);
    const expected = '$10.00';

    expect(actual).toBe(expected);
}) 

it('should display as $1,000,000.00', () => {
    const actual = currencyFormat.format(1000000);
    const expected = '$1,000,000.00';

    expect(actual).toBe(expected);
}) 