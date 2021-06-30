import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';
import OrderConfirmation from './pages/confirmation/OrderConfirmation';

import { OrderDetailsProvider } from './contexts/OrderDetails';

export default function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'complete'
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }

  // return (
  //   <Container>
  //     <OrderDetailsProvider>
  //       {/* Summary page and entry page need provider */}
  //       <OrderEntry />
  //     </OrderDetailsProvider>
  //     {/* Confirmation page does not need provider */}
  //   </Container>
  // );

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}
