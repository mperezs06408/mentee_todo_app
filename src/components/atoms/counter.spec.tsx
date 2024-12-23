import { render } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter component", () => {
  test("render component", () => {
    const component = render(<Counter />);

    expect(component.container.firstChild).not.toBeNull();
  });
});
