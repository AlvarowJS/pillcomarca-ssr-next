export interface NoticiaResponse {
    current_page: number;
    data: Noticia[];
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
  
  export interface Noticia {
    id: number;
    titulo: string;
    fecha: string;
    nota: string;
    referencia: string;
    user_id: number;
    categoria_id: number;
    created_at: string;
    updated_at: string;
    noticia_imagenes: NoticiaImagen[];
    categoria: Categoria;
    user: Usuario;
  }
  
  export interface NoticiaImagen {
    id: number;
    imagen: string;
    noticia_id: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface Categoria {
    id: number;
    nombre_categoria: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
  export interface Usuario {
    id: number;
    role_id: number;
    cargo_id: number;
    dependencia_id: number;
    nombres: string;
    apellidos: string;
    celular: string;
    dni: string;
    email: string;
    email_verified_at: string | null;
    estado: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
  }
  