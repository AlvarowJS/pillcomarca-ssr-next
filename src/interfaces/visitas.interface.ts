export interface RegistroVisitasResponse {
  current_page: number;
  data: Visita[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Visita {
  id: number;
  fecha: string;
  asunto: string | null;
  oficina: string | null;
  hora_ingreso: string;
  hora_salida: string | null;
  user_id: number | null;
  usuario_publico_id: number;
  depedencia_id: number;
  created_at: string;
  updated_at: string;
  usuario_publico: UsuarioPublico;
  depedencia: Dependencia;
}

export interface UsuarioPublico {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  persona: string;
  created_at: string;
  updated_at: string;
}

export interface Dependencia {
  id: number;
  nombre_dependencia: string;
  estado: boolean;
  created_at: string | null;
  updated_at: string | null;
}

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}
