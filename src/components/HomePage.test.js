import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

import HomePage from './HomePage';
import DetailPage from './HomePage';

describe('Home page', () => {
  //   const mockedUsedNavigate = jest.fn();
  //   jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     useNavigate: () => mockedUsedNavigate,
  //   }));
  jest.mock('./HomePage.jsx');

  test('should render home page', async () => {
    const { queryByTestId, queryByText, findAllByAltText } = render(
      <HomePage />,
      { wrapper: MemoryRouter }
    );
    const title = await screen.getByText('Welcome to Simple Blog');
    expect(title).toBeInTheDocument();
  });

  // test('routes to a new route', async () => {
  //   const route = '/post';
  //   const { getByText } = render(
  //     <MemoryRouter history={history}>
  //       <Link to='/post'>Add Post</Link>
  //     </MemoryRouter>
  //   );

  //   expect(screen.getByTestId('post-page')).toHaveTextContent(route);
  //   // fireEvent.click(getByText('Add Post'));
  //   // expect(history.push).toHaveBeenCalledWith('/post');
  // });

  // test('should render detail page', async () => {
  //   const onClick = jest.fn();
  //   const { queryByTestId, queryByText, findAllByAltText } = render(
  //     <HomePage onClick={onClick} />,
  //     { wrapper: MemoryRouter }
  //   );
  //   await userEvent.click(screen.queryByRole('button', { name: /Add Post/i }));
  //   expect(onClick).toHaveBeenCalled();
  // });
});
