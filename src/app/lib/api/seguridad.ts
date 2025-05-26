// lib/api/normativas.ts
import { SeguridadCategoria } from "@/interfaces/seguridad.interface";
import { apiFetch } from "../http";


export async function getSeguridad(): Promise<SeguridadCategoria[]> {
  return await apiFetch('/v1/seguridad');
}
