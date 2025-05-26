export interface DirectorioItem {
    id: number;
    nombres: string;
    apellidos: string;
    correo: string;
    cel: string;
    cargo: string;
    dependencia: string;
    foto: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
  }
  
  export interface DirectorioResponse {
    current_page: number;
    data: DirectorioItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }
  