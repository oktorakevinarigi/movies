import { render, screen } from "@testing-library/react";

import { Card } from "../card";
import { PropsCard } from "../stories/card.stories";

describe("card", () => {
  it("should render", async () => {
    render(<Card {...PropsCard} />);
    const titleElement = await screen.findByText("The Godfather");
    expect(titleElement).toBeInTheDocument();
  });
});
