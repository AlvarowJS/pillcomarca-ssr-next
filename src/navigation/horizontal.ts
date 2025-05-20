import { NavItem } from "@/interfaces";

export const navItems: NavItem[] = [
    {
        path: '/institucion', text: 'Institución',
        submenus: [
            { path: '/servicios', text: 'Servicios' },
            { path: '/seguridad-ciudadana', text: 'Seguridad Ciudadana' },
            { path: '/mision-vision', text: 'Misión y Visión' },
            { path: '/fut', text: 'FUT' },
            { path: '/mesa-partes', text: 'Mesa de Partes' },
            { path: '/directorio', text: 'Directorio' },
            { path: '/historia', text: 'Historia de Pillco Marca' },
            { path: '/organigrama', text: 'Organigrama' },
            { path: '/registro-visitas', text: 'Registro de Visitas' },
            { path: '/acceso-informacion', text: 'Acceso a la Información' },
            { path: '/agenda-institucional', text: 'Agenda Institucional' },
        ]
    },
    {
        path: '/documentos', text: 'Documentos',
        submenus: [
            { path: '/documentos', text: 'Documentos de Gestión' },
            { path: '/normativas', text: 'Normativa' },
            { path: '/saldos-balance', text: 'Saldos de Balance' }
        ]
    },
    { path: '/noticias', text: 'Noticias' },
    { path: '/convocatoria', text: 'Convocatoria' },
]