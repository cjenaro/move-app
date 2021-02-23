import useFormattedDate from "./use-formatted-date";

export default function useClient(clientId?: string) {
  const today = useFormattedDate(new Date());

  return {
    name: "Jenaro",
    id: clientId,
    routines: {
      [today]: "1231231123",
    },
  };
}
