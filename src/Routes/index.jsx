import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages';

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
