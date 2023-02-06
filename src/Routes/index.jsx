import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages';
import Chat from '../Pages/Chat/Chat';

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}
