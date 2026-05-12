import { useEffect, useState } from "react";

const adminEmail = "admin@gmail.com";
const adminPassword = "iTemp123!";
const storageKey = "portfolio-admin-authenticated";
const authEventName = "portfolio-admin-auth-changed";

function getStoredAuth() {
  return localStorage.getItem(storageKey) === "true";
}

export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(getStoredAuth);

  useEffect(() => {
    function handleAuthChange() {
      setIsAdmin(getStoredAuth());
    }

    window.addEventListener(authEventName, handleAuthChange);
    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener(authEventName, handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  function login(email, password) {
    const isValid = email === adminEmail && password === adminPassword;

    if (isValid) {
      localStorage.setItem(storageKey, "true");
      window.dispatchEvent(new Event(authEventName));
    }

    return isValid;
  }

  function logout() {
    localStorage.removeItem(storageKey);
    window.dispatchEvent(new Event(authEventName));
  }

  return { isAdmin, login, logout };
}
