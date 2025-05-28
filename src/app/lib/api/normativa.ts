// lib/api/normativas.ts
import { apiFetch } from "../http";
import { DocumentoNormativoResponse, DocumentoNormativoResponseId, TipoDeDocumento } from "@/interfaces";

interface NormativaFilters {
  year?: number;
  nombre?: string;
  tipodedocumento_id?: number;
  page?: number;
}

export async function getNormativas(filters: NormativaFilters = {}): Promise<DocumentoNormativoResponse> {
  
  const params = new URLSearchParams();

  if (filters.year) params.append("year", filters.year.toString());
  if (filters.nombre) params.append("nombre", filters.nombre);
  if (filters.tipodedocumento_id) params.append("tipodedocumento_id", filters.tipodedocumento_id.toString());
  if (filters.page) params.append("page", filters.page.toString());

  const query = params.toString();
  return await apiFetch(`/v1/documentonormativa?${query}`);
}

export async function getTiposDoc(): Promise<TipoDeDocumento> {
  return await apiFetch('/v1/tipodedocumento');
}

export async function getNormativaId(id: string): Promise<DocumentoNormativoResponseId> {
  return await apiFetch(`/v1/documentonormativa/${id}`);
}