import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <h2>Contak</h2>
      <RouterLink color="primary" to="/app">
        Login...
      </RouterLink>
    </div>
  );
}
