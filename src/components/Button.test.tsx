import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('A Button', () => {
  it('should display button', () => {
    render(<Button label={'Click Me'}>Click Me</Button>);
    expect(screen.getByRole('button')).toBeVisible();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
