import AppComponent from "./AppComponent";

describe("Given AppComponent component", () => {
  describe("When it receives a div with class container", () => {
    test("Then it should show div a with class container ", () => {
      const container = document.createElement("div");

      const div = new AppComponent(container);

      expect(div).toBeInstanceOf(AppComponent);
    });
  });
});
