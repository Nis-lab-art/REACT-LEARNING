import { sum } from "../sum";
test("Sum of the two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(5);
});
