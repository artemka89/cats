import type { Cat } from "./types";

const API_URL = import.meta.env.VITE_BASE_API_URL as string;

export async function fetchData<R>(
  url: string,
  options: RequestInit | undefined = {},
): Promise<R | undefined> {
  try {
    const response = await fetch(API_URL + url, {
      ...options,
      headers: {
        ...options?.headers,
        "x-api-key": import.meta.env.VITE_API_KEY as string,
      },
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: Promise<R> = await response.json();
    if (!data) {
      throw new Error("Data not found");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRandomCat() {
  const data = await fetchData<Cat[]>(API_URL);
  return data;
}
