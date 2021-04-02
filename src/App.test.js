import { render, screen, fireEvent, container, className } from '@testing-library/react';
import App from './App';

// test('renders initial screen 0', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/0/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Addition', () => {
  render(<App/>);
  const displayElement = screen.getByText('0')
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='))
  expect(displayElement.innerHTML).toEqual('16');
})


test('Subtraction', () => {
  render(<App/>);
  const displayElement = screen.getByText('0')
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('1'))
  fireEvent.click(screen.getByText('='))
  expect(displayElement.innerHTML).toEqual('68');
})


test('Multiplication', () => {
  render(<App/>);
  const displayElement = screen.getByText('0')
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='))
  expect(displayElement.innerHTML).toEqual('135');
})


test('Division', () => {
  render(<App/>);
  const displayElement = screen.getByText('0')
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('%'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('='))
  expect(displayElement.innerHTML).toEqual('9');
})


test('Clear Everything', () => {
  render(<App/>);
  const displayElement = screen.getByText('0');
  const clearEverything = screen.getByText('CE');
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(clearEverything);
  expect(displayElement.innerHTML).toEqual('0');
})

test('Clear', () => {
  render(<App/>);
  const displayElement = screen.getByText('0');
  const clear = screen.getByText('C');
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(clear);
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  expect(displayElement.innerHTML).toEqual('15');
})