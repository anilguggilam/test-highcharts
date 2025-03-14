import { expect, describe, test } from "testing-library";
import { render, screen } from "@testing-library/react";
import SnackBar from "./SnackBar";

describe("SnackBar", () => {
  test("simple render", () => {
    render(<SnackBar message="test" />);

    expect(screen).toMatchSnapshot();
  });

  test("error case render", () => {
    render(<SnackBar message="test" />);

    expect(screen).toMatchSnapshot();
  });

  test("no data render", () => {
    render(<SnackBar message="test" />);

    expect(screen).toMatchSnapshot();
  });
});
