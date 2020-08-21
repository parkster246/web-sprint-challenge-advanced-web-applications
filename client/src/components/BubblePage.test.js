import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";

jest.mock("react");
jest.mock("axios");

describe("Mock fetch", () => {
  test("Fetches data and renders the bubbles", () => {
    // Finish this test
    const { getByTestId } = render(<BubblePage bubblePage={{}}/>)
    const data = [ {id: 1}, {id: 2}]
   axios.create.mockImplementationOnce(() => Promise.resolve(data))
    expect(axiosWithAuth()).resolves.toEqual(data)
     waitFor(() => expect(getByTestId(/colors/i)).toHaveLength(3))
  });
});
