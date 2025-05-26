// lib/api/visitas.ts
import { apiFetch } from "../http";
import { RegistroVisitasResponse } from "@/interfaces";

interface VisitaFilters {
  page?: number;
}

export async function getVisitas(filters: VisitaFilters = {}): Promise<RegistroVisitasResponse> {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());

  const query = params.toString();
  return await apiFetch(`/v1/registro-visitas?${query}`);
}
