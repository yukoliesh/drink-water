import * as React from 'react';
import { render, act, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import WaterAmount from "./components/WaterAmount";
import TotalAmount from './components/TotalAmount';
import AlertBox from './components/AlertBox/AlertBox';

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
    const setup = () => {
      const utils = render(<WaterAmount setTotalAmount={setTotalAmount} />)
      const input = utils.getByLabelText('water-amount') as HTMLInputElement;
      return {
        input,
        ...utils,
      }
    }
    const { input, getByTestId } = setup();    
    const resetButton = getByTestId("reset-button");
    // Initial value
    expect(input.value).toBe("0");
    fireEvent.change(input, { target: { value: '23' } });

    expect(input.value).toBe("23");

    fireEvent.click(resetButton);

    expect(input.value).toBe("0");
  });
  jest.useFakeTimers();

  it('renders the Drink Water Reminder AlertBox every hour', () => {
    const onCloseClick = jest.fn();
    const onNoReminderClick = jest.fn();
    const { container } = render(<AlertBox onCloseClick={onCloseClick} onNoReminderClick={onNoReminderClick} emojiLabel="Smile" emojiSymbol={"😀"} />); 

    // do I need to test for modalIsDisplay true?
 
    expect(container.textContent).toBe("ReminderxDrink your water!  Nourish your body!😀Don't reminder me!");
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 60*60*1000);
  });

  it('triggers the checkbox when it is clicked', () => {
    const onCloseClick = jest.fn();
    const onNoReminderClick = jest.fn();
    const { getByTestId } = render(<AlertBox onCloseClick={onCloseClick} onNoReminderClick={onNoReminderClick} emojiLabel="Smile" emojiSymbol={"😀"} />); 
    const checkbox = getByTestId("noreminder-checkbox") as HTMLInputElement;
    const closeButton = getByTestId("close-button");

    expect(checkbox.checked).toEqual(false);
    act(() => {
      fireEvent.click(checkbox)
    })
    expect(checkbox.checked).toEqual(true);
    act(() => {
      fireEvent.click(closeButton)
    })
    expect(onCloseClick).toHaveBeenCalledTimes(1)
    //is this enough?
  });
});
