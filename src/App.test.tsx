import React from 'react';
import { render, fireEvent, getByTestId, getByText, findByText, queryByAttribute } from '@testing-library/react';
import App from './components/App';

test('Renders todo app', () => {
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

test('It should able to add a todo, mark todo as complete, verify pending todos and delete functionality', () => {
  const { input, utils } = setup()
  //Todo Name
  const todoOne = 'Buy a coffee'
  const todoTwo = 'Buy a iPhone'

  // Before typing on input the input field should be blank
  expect((input as any).value).toBe('') // empty before

  // Type in the input filed
  fireEvent.change(input, { target: { value: todoOne } });

  // Verify that the text which you have typed should be same as it dispaying
  expect((input as any).value).toBe(todoOne);

  // Click on the Add button
  fireEvent.click(utils.getByText("Add"));
  
  // Verify that the todo is added successfully 
  expect(utils.getByText(todoOne)).toHaveTextContent(todoOne);

  // Check pending item
  expect(utils.getByText('There is 1 todo.')).toHaveTextContent('1 todo');

  // Type in the input filed
  fireEvent.change(input, { target: { value: todoTwo } });

  // Verify that the text which you have typed should be same as it dispaying
  expect((input as any).value).toBe(todoTwo);

  // Click on the Add button
  fireEvent.click(utils.getByText("Add"));

  // Check pending item
  expect(utils.getByText('There are 2 todos.')).toHaveTextContent('2 todos');

  // click on to todo to make it complete
  fireEvent.click(utils.getByText(todoTwo));

  // Check pending item
  expect(utils.getByText('There is 1 todo.')).toHaveTextContent('1 todo');

  // Delete todo
  const getById = queryByAttribute.bind(null, 'id');

  const deleteBtn1: any = getById(utils.container, 'btn-0');
  const deleteBtn2: any = getById(utils.container, 'btn-1');

  // Delete 2nd todo
  fireEvent.click(deleteBtn2);

  // Check pending item
  expect(utils.getByText('There is 0 todo.')).toHaveTextContent('0 todo');

  // Verify that the todo2 is visible 
  expect(utils.getByText(todoTwo)).toHaveTextContent(todoTwo);

  // Delete the remaining todo 
  fireEvent.click(deleteBtn1);

  const linkElement = utils.getByText(/All todos are done! Take a rest!/i);
  
  // Finaly verify that (All todos are done! Take a rest) text is present in the UI
  expect(linkElement).toBeInTheDocument();
})