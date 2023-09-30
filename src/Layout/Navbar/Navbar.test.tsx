// import { waitFor, fireEvent,render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from '.';

// describe('testing navbar', () => {
//   test('menu render correctly', async () => {
//     render(<BrowserRouter><Navbar /></BrowserRouter>)
//     const menus = ['Add Data', 'Profile', 'Log Out'];

//     await waitFor(() => {
//       menus.map(async (menu) => {
//         const title = screen.getByText(menu)
//         expect(title).toBeDefined();

//       })
//     })
//   });
//   it('logs out when the "Log Out" item is clicked', () => {
//     const { getByText } = render(
//       <BrowserRouter>
//         <Navbar />
//       </BrowserRouter>
//     );
//     const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
//     fireEvent.click(getByText('Log Out'));
//     expect(removeItemSpy).toHaveBeenCalledWith('token');
//   });
// })

import { waitFor, fireEvent, render, screen } from '@testing-library/react';
import Navbar from '.';
import { BrowserRouter } from 'react-router-dom';

describe('testing navbar', () => {
  test('menu render correctly', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>)
    const menus = ['Add Data', 'Profile', 'Log Out'];

    await waitFor(() => {
      menus.map(async (menu) => {
        const title = screen.getByText(menu)
        expect(title).toBeDefined();

      })
    })
  })
})