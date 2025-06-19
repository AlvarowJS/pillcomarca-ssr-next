import { DirectorioResponse } from "@/interfaces/directorio.interface";
import { apiFetch } from "../http";
import { Regidor } from "@/interfaces/regidor.interface";
interface DirectorioFilter {
    page?: number;
  }

export async function getDirectorio(filters: DirectorioFilter = {}): Promise<DirectorioResponse> {
  
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());

  const query = params.toString();
  return await apiFetch(`/v1/directorios?${query}`);
}
export async function getRegidor(): Promise<Regidor[]> {
  return await apiFetch('/v1/directorios-regidor');
}