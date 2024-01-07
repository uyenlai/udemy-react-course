export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function loader() {
  const token = getAuthToken();
  return token;
}
