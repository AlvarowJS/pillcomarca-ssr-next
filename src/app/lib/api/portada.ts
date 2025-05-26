import { PortadaResponse } from "@/interfaces";
import { apiFetch } from "../http";


export async function getPortadas(): Promise<PortadaResponse> {
    return await apiFetch('/v1/portada');
}