import "./index.css"

import App from "./App.tsx"
import { HelmetProvider } from "react-helmet-async"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import emailjs from "@emailjs/browser"

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)
