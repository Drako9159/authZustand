import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  isAllowed: boolean;
}

export default function ProtectedRoute({ isAllowed, children }: Props) {
  if (!isAllowed) return <Navigate to="/login"></Navigate>;
  return children ? <> {children} </> : <Outlet></Outlet>;
}
