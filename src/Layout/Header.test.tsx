import { act, fireEvent, render } from '@testing-library/react'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { Context as ResponsiveContext } from 'react-responsive'
import { ReactElement } from 'react';


const renderWithRouter = (ui: ReactElement, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

describe('Header', () => {
  it('should render Header', () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText('Header')).toBeInTheDocument();
  })

  it('should detect mobile', () => {
    const { getByText } = renderWithRouter(<ResponsiveContext.Provider value={{ width: 500 }}><Header /></ResponsiveContext.Provider>);
    expect(getByText('mobile view')).toBeInTheDocument();
  })

  it('should detect desktop', () => {
    const { getByText } = renderWithRouter(<ResponsiveContext.Provider value={{ width: 1500 }}><Header /></ResponsiveContext.Provider>);
    expect(getByText('desktop view')).toBeInTheDocument();
  })

  it.each([
    ['Home', '/'],
    ['Page 1', '/page-1']
  ])('has item menu %s', (option, expectedUrl) => {
    const { getByText } = renderWithRouter(<Header />)
    act(() => fireEvent.click(getByText(option)));
    expect(window.location.pathname).toBe(expectedUrl);
  })
});

