import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Card from '../../../../src/components/Card';

// Generic test pattern is AAA: Arrange, Act, Assert

describe('Card Component', () => {
  it('should render', () => { 
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image="/test-image.jpg"
        imageAlt="Test Image"
        handleDisplayOverlay={() => {}}
        data-testid="card"
      />
    ) // ARRANGE
    
    const card = screen.getByTestId("card") // ACT
    expect(card).toBeInTheDocument() // ASSERT
  });

  it('should display title', () => { 
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image="/test-image.jpg"
        imageAlt="Test Image"
        handleDisplayOverlay={() => {}}
        data-testid="card"
      />
    ) // ARRANGE
    
    const title = screen.getByText("Test Title") // ACT
    expect(title).toBeInTheDocument() // ASSERT
  });

  it('should display subtitle', () => { 
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image="/test-image.jpg"
        imageAlt="Test Image"
        handleDisplayOverlay={() => {}}
        data-testid="card"
      />
    ) // ARRANGE
    
    const subtitle = screen.getByText("Test Subtitle") // ACT
    expect(subtitle).toBeInTheDocument() // ASSERT
  });

  it('should display image', () => {
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image="/test-image.jpg"
        imageAlt="Test Image"
        handleDisplayOverlay={() => {}}
        data-testid="card"
      />
    ) // ARRANGE
    
    const image = screen.getByAltText("Test Image") // ACT
    expect(image).toBeInTheDocument() // ASSERT
  });

  it('should display "View Details" button', () => {
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image="/test-image.jpg"
        imageAlt="Test Image"
        handleDisplayOverlay={() => {}}
        data-testid="card"
      />
    ) // ARRANGE
    
    const button = screen.getByRole("button", { name: "View Details" }) // ACT
    expect(button).toBeInTheDocument() // ASSERT
  });

  it('should call handleDisplayOverlay when "View Details" button is clicked', () => {
    const handleDisplayOverlay = jest.fn();
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image="/test-image.jpg"
        imageAlt="Test Image"
        handleDisplayOverlay={handleDisplayOverlay}
        data-testid="card"
      />
    ) // ARRANGE
    
    const button = screen.getByRole("button", { name: "View Details" }) // ACT
    expect(button).toBeInTheDocument() // ASSERT
    button.click();
    expect(handleDisplayOverlay).toHaveBeenCalled();
  });

  it('should display default image when no image is provided', () => {
    render(
      <Card 
        title="Test Title" 
        subtitle="Test Subtitle" 
        image=""
        imageAlt="Test Image"
        handleDisplayOverlay={() => {}}
        data-testid="card"
      />
    ) // ARRANGE
    
    const image = screen.getByAltText("Test Image") // ACT
    expect(image).toBeInTheDocument() // ASSERT
  });
});
