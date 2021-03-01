import { useMutation } from "react-query";

export default function useLogin() {
  return useMutation((dni: number) =>
    fetch("/.netlify/functions/login", {
      method: "POST",
      body: JSON.stringify({ dni }),
    })
  );
}
