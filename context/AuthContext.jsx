"use client";

import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
  try {
    const response = await fetch("/api/auth/me",{
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      setUser(null);
      return;
    }

    setUser(data.user);
  } catch (error) {
    console.error("Auth check failed:", error);
    setUser(null);
  } finally {
    setLoading(false);
  }
};

  const logout = async () => {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    setUser(null);

  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    setUser(null);
  }
};

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        fetchUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}