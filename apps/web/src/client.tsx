import { StartClient } from '@tanstack/react-start/client';
import { getRouter } from './router';

const router = getRouter();

export default function App() {
  return <StartClient router={router} />;
}
