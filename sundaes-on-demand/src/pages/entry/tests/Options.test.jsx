import { render, screen } from '@testing-library/react';

import Options from '../Options';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each toppings option from server', async () => {
  // Mock Service Worker will return three toppings from server
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // find images, expect 3 based on what msw returns
  const images = await screen.findAllByRole('img', { name: /topping$/i });
  expect(images).toHaveLength(3);

  // check the actual alt text for the images
  const altTexts = images.map((img) => img.alt);
  expect(altTexts).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping'
  ]);
});
