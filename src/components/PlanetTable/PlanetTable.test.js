import React from "react";
import { render } from "@testing-library/react";
import PlanetTable from "./PlanetTable";

describe("PlanetTable tests", () => {
  it("should render", () => {
    expect(render(<PlanetTable />)).toBeTruthy();
  });
});
