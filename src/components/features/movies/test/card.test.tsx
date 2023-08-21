import { render, screen } from "@testing-library/react";

import { Card } from "../card";
import { Desktop } from "../stories/card.stories";

describe("card", () => {
  it("should render", async () => {
    render(<Card {...Desktop.args} />);
    const titleElement = await screen.findByText("The Godfather");
    expect(titleElement).toBeInTheDocument();
  });
});
