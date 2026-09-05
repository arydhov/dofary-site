import { useCallback, useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';
import { defaultPortfolio } from '../data/portfolio';

function mergePortfolio(data) {
  const videos = Array.isArray(data?.videos) && data.videos.length
    ? data.videos
    : defaultPortfolio.videos;

  return {
    ...defaultPortfolio,
    hero: { ...defaultPortfolio.hero, ...(data?.hero || {}) },
    videos,
  };
}

export function usePortfolio() {
  const [content, setContent] = useState(defaultPortfolio);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPortfolio() {
      try {
        const response = await fetch(BACKEND_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`Portfolio request failed (${response.status})`);

        const data = await response.json();
        setContent(mergePortfolio(data));
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch Error (using default portfolio):', error);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadPortfolio();
    return () => controller.abort();
  }, []);

  const savePortfolio = useCallback(async (nextContent) => {
    setSaving(true);
    setContent(nextContent);

    try {
      // The legacy Google Apps Script endpoint uses no-cors, so the browser
      // cannot expose its response status. Keep the existing contract here.
      await fetch(BACKEND_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(nextContent),
      });

      return { ok: true };
    } catch (error) {
      console.error('Save Error:', error);
      return { ok: false, error };
    } finally {
      setSaving(false);
    }
  }, []);

  return { content, setContent, loading, saving, savePortfolio };
}
