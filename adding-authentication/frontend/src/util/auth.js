import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function loader() {
  const token = getAuthToken();
  return token;
}

export function chechAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/authentication");
  }
  return null;
}
