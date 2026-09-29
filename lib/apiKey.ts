const STORAGE_KEY = 'mechiGeminiApiKey';

export const getApiKey = (): string => {
    try { return localStorage.getItem(STORAGE_KEY) || (import.meta.env.VITE_GEMINI_API_KEY as string) || ''; } catch { return ''; }
};

export const setApiKey = (key: string) => {
    try { localStorage.setItem(STORAGE_KEY, key.trim()); } catch {}
};
