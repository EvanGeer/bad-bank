import currencyFormat from "./currencyFormat"

it('should display as $10.00', () => {
    const actual = currencyFormat.format(10);
    const expected = '$10.00'

    expect(actual).toBe(expected);
}) 