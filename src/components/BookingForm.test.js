import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('HTML5 validation attributes should be applied', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const dateInput = screen.getByLabelText('Select a Date');
  const timeSelect = screen.getByLabelText('Select a Time');

  expect(nameInput).toHaveAttribute('required');
  expect(emailInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('required');
  expect(timeSelect).toHaveAttribute('required');
});

test('validateName should return true for a valid name', () => {
  const validName = 'John Doe';
  const isValid = validateName(validName);
  expect(isValid).toBe(true);
});

test('validateName should return false for an invalid name', () => {
  const invalidName = '';
  const isValid = validateName(invalidName);
  expect(isValid).toBe(false);
});

// Similar tests for other validation functions
