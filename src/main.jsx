import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";

function Root() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 900); // short branded splash
        return () => clearTimeout(timer);
    }, []);

    return loading ? <LoadingScreen /> : <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
