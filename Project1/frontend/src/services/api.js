const BASE = '/api';

async function req(path, options = {}) {
  try {
    const r = await fetch(BASE + path, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) {
      throw new Error(d.message || `Request failed with status ${r.status}`);
    }
    return d;
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Backend server is unreachable. Please ensure the Spring Boot backend is running on port 8080.');
    }
    throw err;
  }
}

export const api = {
  register: (payload) => req('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => req('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  concepts: () => req('/concepts'),
  enquiry: (payload) => req('/enquiries', { method: 'POST', body: JSON.stringify(payload) }),
};

