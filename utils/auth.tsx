export async function refreshAccessToken() {
  console.log('refreshing access token');
  const response = await fetch('/api/auth/refresh-token', { method: 'GET' });

  if (!response.ok) {
    throw new Error('Token refresh failed');
  }

  return response.json();
}

export async function logout() {
  await fetch('/api/auth/logout', { method: 'POST' });
}
