import { Noticia, NoticiaResponse } from "@/interfaces/noticia.interface";
import { apiFetch } from "../http";

interface NoticiaFilters {
    page?: number;
}


export async function getNoticias(filters: NoticiaFilters = {}): Promise<NoticiaResponse> {

    const params = new URLSearchParams();
    if (filters.page) params.append("page", filters.page.toString());

    const query = params.toString();
    return await apiFetch(`/v1/noticia?${query}`);
}

export async function getNoticiaId(id: string): Promise<Noticia> {
    return await apiFetch(`/v1/noticias/${id}`)
}