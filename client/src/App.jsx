import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const ownerLocation = useLocation().pathname.startsWith("/owner");
  return <>{!ownerLocation && <Navbar setShowLogin={setShowLogin} />}</>;
};

export default App;
