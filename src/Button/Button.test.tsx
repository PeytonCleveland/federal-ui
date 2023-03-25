import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('renders', () => {
    render(<Button>hello</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
