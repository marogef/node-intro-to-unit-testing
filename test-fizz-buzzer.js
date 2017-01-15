//write unit tests for the fizzBuzzer function below:

//module.exports = function(num) {
//    if (typeof num !== 'number') {
//        throw Error('`num` must be a number');
//    }
//    if (num % 15 === 0) {
//        return 'fizz-buzz';
//    }
//    if (num % 5 === 0) {
//        return 'buzz';
//    }
//    if (num % 3 === 0) {
//        return 'fizz';
//    }
//    else {
//        return num;
//    }
//}
//



require('chai').should();

describe('isEqual', function () {
    it('should give right answers for equal and unequal inputs', function () {
        // we're going to the `isEqual` function on a range of inputs
        // that the function should return true for.
        const equalInputs = [
            [0, 0, 0],
            [true, true, true]
        ];
        equalInputs.forEach(function (input) {
            const answer = isEqual(input[0], input[0], input[0]);
            // use `chai.should`'s keywords to set expectations for
            // `isEqual`'s behavior
            answer.should.be.true;
        });

        // range of inputs that the function should return false for
        const unequalInputs = [
            ['1', 1],
            [1, 2],
            [1, true],
            [0, false]
        ];
        unequalInputs.forEach(function (input) {
            const answer = isEqual(input[0], input[0], input[0]);
            answer.should.be.false
        });
    });
});

it('should raise error if args not numbers', function () {
    // range of bad inputs where not both are numbers
    const badInputs = [
        ['a', 1],
        ['1', 2],
        [2, false]
    ];

});
