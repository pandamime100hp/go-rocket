import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import Pagination from '../../../../src/components/Pagination';


describe('Pagination Component', () => {
  it('should render', () => { 
    const data = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}];

    render(
      <Pagination data={data} ItemComponent={() => <div data-testid="card" />} />
    )

    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(data.length);
    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });

  it('should display pagination', () => { 
    const data = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}];

    render(
      <Pagination data={data} ItemComponent={() => <div data-testid="card" />} />
    )

    const pagination = screen.getByText("Page 1 of 1");
    expect(pagination).toBeInTheDocument();
  });

  it('should change page when clicking page buttons', () => {
    const data = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6}, { id: 7}, { id: 8}, { id: 9}, { id: 10}, { id: 11}, { id: 12}, { id: 13}, { id: 14}, { id: 15}, { id: 16}, { id: 17}, { id: 18}, { id: 19}, { id: 20}];

    render(
      <Pagination data={data} ItemComponent={() => <div data-testid="card" />} />
    )

    const nextButton = screen.getByRole("button", { name: ">" });
    act(() => {nextButton.click()});

    let pagination = screen.getByText("Page 2 of 2");
    expect(pagination).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: "<" });
    act(() => {prevButton.click()});

    pagination = screen.getByText("Page 1 of 2");
    expect(pagination).toBeInTheDocument();
  });
});