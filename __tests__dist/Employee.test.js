// import the Employee class
const Employee = require("../lib/Employee");

// create a suite with describe
describe("Employee", () =>(
    describe("constructor", () => {
                // test for name id and email
        it("sets name property", () => {
        // arrange
            const name = "Israel";
        // act
            const employee = new Employee("Israel", 5, "israel@email.com");
        // assertion
            expect(employee).toEqual({name: "Israel", 5, "israel@email.com"})
        });
    });
});
// Properties:

// - name: String - The employee's name. ("Fred")
// - id: NUmber - The unique id of the employee. (1)
// - email: String - the email used to contact employee. ("fred@email.com")

// Methods:

// - getName(): String - Returns the employee's name

// - getId(): Number - Returns the employee's id

// - getEmail(): String - returns 'Employee'


// - getRole()—returns 'Employee'