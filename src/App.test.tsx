import React from 'react';
import { render, fireEvent, getByTestId, getByText, findByText } from '@testing-library/react';
import App from './components/App';

test('renders todo app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/All todos are done! Take a rest!/i);
  expect(linkElement).toBeInTheDocument();
});

// Render the app and return the input and utils required for various operations
const setup = () => {
  const utils = render(<App />)
  const input = utils.getByPlaceholderText('Enter new todo')
  return {
    input,
    utils,
  }
}

test('It should able to add a todo', () => {
  const { input, utils } = setup()
  //Todo Name
  const todoText = 'Buy a coffee'

  // Before typing on input the input field should be blank
  expect((input as any).value).toBe('') // empty before

  // Type in the input filed
  fireEvent.change(input, { target: { value: todoText } });

  // Verify that the text which you have typed should be same as it dispaying
  expect((input as any).value).toBe(todoText);

  // Click on the Add button
  fireEvent.click(utils.getByText("Add"));
  
  // Verify that the todo is added successfully 
  expect(utils.getByText(todoText)).toHaveTextContent(todoText);

  // Check pending item
  expect(utils.getByText('There is 1 todo.')).toHaveTextContent('1 todo');

  // click on to todo to make it complete
  fireEvent.click(utils.getByText(todoText));

  // Check pending item
  expect(utils.getByText('There is 0 todo.')).toHaveTextContent('0 todo');

  // Delete todo
  fireEvent.click(utils.getByText("Delete"));

  const linkElement = utils.getByText(/All todos are done! Take a rest!/i);
  
  expect(linkElement).toBeInTheDocument();
})