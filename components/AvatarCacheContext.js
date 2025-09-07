import { createContext, useContext, useState } from 'react';

const AvatarCacheContext = createContext();

export function AvatarCacheProvider({ children }) {
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AvatarCacheContext.Provider value={{ avatarSrc, setAvatarSrc, loading, setLoading }}>
      {children}
    </AvatarCacheContext.Provider>
  );
}

export function useAvatarCache() {
  return useContext(AvatarCacheContext) || {
    avatarSrc: null,
    setAvatarSrc: () => {},
    loading: false,
    setLoading: () => {}
  };
}
