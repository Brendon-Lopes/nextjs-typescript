import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from '@/components';
import { navItems } from '@/utils/navbar/navItems';

describe('Navbar Component', () => {
  it('should render properly', () => {
    render(<Navbar />)

    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()

    navItems.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    });

    expect(screen.getByRole('button', { name: /abrir menu/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /comprar agora/i })).toBeInTheDocument()
  });

  describe('On mobile', () => {
    it('should toggle the menu', () => {
      window.innerWidth = 375;
      window.innerHeight = 667;

      render(<Navbar />)

      const menuButton = screen.getByRole('button', { name: /abrir menu/i })

      expect(screen.getByRole('navigation')).toHaveClass('hidden')

      fireEvent.click(menuButton)

      expect(screen.getByRole('navigation')).not.toHaveClass('hidden')

      fireEvent.click(menuButton)

      expect(screen.getByRole('navigation')).toHaveClass('hidden')
    });
  });
});
