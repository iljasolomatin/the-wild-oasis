import styled from "styled-components";
import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isPending, isAuthenticated, fetchStatus } = useUser();

  // 2. If there is NO authented user, redirect to the /login page
  useEffect(() => {
    if (!isAuthenticated && !isPending && fetchStatus !== "fetching")
      navigate("/login");
  }, [isAuthenticated, navigate, isPending, fetchStatus]);

  // 3. While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
