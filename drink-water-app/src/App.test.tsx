import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import App from './App';
import WaterAmount from "./components/WaterAmount";
import TotalAmount from './components/TotalAmount';

describe('renders Drink Your Watere app', () => {


  // App Title and subtitle
  it('renders Drink Your Water app title, subtitle and direction', () => {
    const { getByText } = render(<App />);
    const title = getByText("Drink Your Water");
    const subTitle = getByText("Stay hydrated. Drink 8 8-ounce glasses a day.");
    const directionText = getByText("Enter your amount when you drink water.");
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(directionText).toBeInTheDocument();
  });

  // Total Amount
  it('renders Total Amount of water', () => {
    const { getByText } = render(<TotalAmount totalAmount={20} />);
    const totalAmount = getByText("20");
    expect(totalAmount).toBeInTheDocument();
  })

  // Water Amount
  it('renders the amount the user entered and updates when the Submit button triggers the change event', () => {
    const setTotalAmount = jest.fn();
    const { getByText, getByTestId } = render(<WaterAmount setTotalAmount={setTotalAmount} />);
    const submitButton = getByText("Submit");
    const enteredValue = getByTestId("amount-value");

    
    act(() => {
      fireEvent.change(submitButton, { target: { value: '20'}});
    });
    expect(setTotalAmount).toBe('20');

  })

});
