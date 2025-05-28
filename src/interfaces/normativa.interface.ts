export interface DocumentoNormativoResponseId {
  data: {
    type: string;
    id: string;
    attributes: DocumentoAttributes;
    links: {
      self: string;
    };
  };
}

export interface DocumentoNormativoResponse {
    data: DocumentoNormativo[];
    links: {
      self: string;
      pagination: {
        current_page: number;
        from: number;
        to: number;
        total: number;
        per_page: number;
        prev_page: string | null;
        next_page: string | null;
        last_page: number;
      };
      first: string;
      last: string;
      prev: string | null;
      next: string | null;
    };
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      links: {
        url: string | null;
        label: string;
        active: boolean;
      }[];
    };
  }
  
  export interface DocumentoNormativo {
    type: string;
    id: string;
    attributes: DocumentoAttributes;
    links: {
      self: string;
    };
  }
  
  export interface DocumentoAttributes {
    id: string;
    nombre: string;
    fecha: string;
    descripcion: string;
    archivo: string;
    updated_at: string;
    created_at: string;
    Tipodedocumento: TipoDeDocumento;
  }
  
  export interface TipoDeDocumento {
    id: number;
    nombre: string;
    created_at: string;
    updated_at: string;
  }
  