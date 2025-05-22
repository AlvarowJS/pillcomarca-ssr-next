// lib/api/normativas.ts
import { Convocatoria } from "@/interfaces/convocatoria.interface";
import { apiFetch } from "../http";


export async function getConvocatoria(): Promise<Convocatoria> {
  return await apiFetch('/v1/convocatoria');
}
