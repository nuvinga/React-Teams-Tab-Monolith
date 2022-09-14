import React from "react";
import { useTeams } from "msteams-react-base-component";
import Hello from "teams-node-mod-tabs/src/components/Hello";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function Tab() {
  const { theme } = useTeams({})[0];
  return (
    <>
      <h1>Welcome to the MAIN Proj</h1>
      <Hello />
    </>
  );
}
