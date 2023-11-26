export type IType = "json" | "blob";
export type IOptions = RequestInit & { type?: IType };

const DEFAULT_HEADERS = { Accept: "application/json", "Content-Type": "application/json" };

async function handleResponse(res: Response, param?: { type?: IType }) {
  const { type = "json" } = param || {};
  if (!res.ok) {
    throw await res.json();
  }
  if (type === "json") {
    return await res.json();
  } else if (type === "blob") {
    return await res.blob();
  }
  return res;
}

export async function get(url: string, options?: IOptions) {
  const response = await fetch(url, {
    headers: { ...DEFAULT_HEADERS, ...options?.headers },
    ...options,
    method: "GET",
  });
  return await handleResponse(response, options);
}

export async function post(url: string, options?: IOptions) {
  const response = await fetch(url, {
    headers: { ...DEFAULT_HEADERS, ...options?.headers },
    ...options,
    method: "POST",
  });
  return await handleResponse(response, options);
}

export async function put(url: string, options?: IOptions) {
  const response = await fetch(url, {
    headers: { ...DEFAULT_HEADERS, ...options?.headers },
    ...options,
    method: "PUT",
  });
  return await handleResponse(response, options);
}

export async function _delete(url: string, options?: IOptions) {
  const response = await fetch(url, {
    headers: { ...DEFAULT_HEADERS, ...options?.headers },
    ...options,
    method: "DELETE",
  });
  return await handleResponse(response, options);
}

export async function patch(url: string, options?: IOptions) {
  const response = await fetch(url, {
    headers: { ...DEFAULT_HEADERS, ...options?.headers },
    ...options,
    method: "PATCH",
  });
  return await handleResponse(response, options);
}

export type IQuery = Record<string, string | string[] | number | boolean | null | undefined>;

export function cleanQuery(query: IQuery) {
  return Object.keys(query).reduce(
    (cleanedQuery, queryKey) =>
      query[queryKey] ? { ...cleanedQuery, [queryKey]: query[queryKey] } : { ...cleanedQuery },
    {} as IQuery,
  );
}
export function queryToString(query: IQuery) {
  return (
    "?" +
    Object.keys(query)
      .map(queryKey => (query[queryKey] ? `${queryKey}=${query[queryKey]}` : null))
      .filter(Boolean)
      .join("&")
  );
}
