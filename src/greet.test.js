const greet = require("./greet");

test("greet to World", () => {
  expect(greet("World")).toBe("Hello World!");
});
