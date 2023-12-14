import { getMonth } from "./index";

// test unitaire 2 t 3
describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      const newDate = new Date("2022-01-01");
      const newMonth = getMonth(newDate);
      expect(newMonth).toBe("janvier");
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      const newDate = new Date("2022-07-08");
      const newMonth = getMonth(newDate);
      expect(newMonth).toBe("juillet");
    });
  });
});
