export const bdPresupuesto = [
  {
    id: 1,
    titulo: 'Presupuesto Participativo 2026',
    fecha: '2025-06-15',
    year: 2026,
    anexos: [],
    informes: [
      {
        id: 1,
        nombre: 'Informe de Resultados del Presupuesto Participativo 2026',
        archivo:
          'https://www.gob.pe/institucion/munipillcomarca/informes-publicaciones/6761479-informe-final-presupuesto-participativo-basado-en-resultados-2026',
      },
    ],
  },
  {
    id: 1,
    titulo: 'Presupuesto Participativo 2025',
    fecha: '2024-03-15',
    year: 2025,
    anexos: [
      {
        id: 1,
        nombre: 'Anexo 1 - cronograma 2025',
        archivo:
          'https://cdn.www.gob.pe/uploads/document/file/6051090/5357118-anexo-1-cronograma-pp-2025.docx?v=1710443309',
      },
      {
        id: 2,
        nombre: 'Anexo 2 - ficha de inscripcion 2025',
        archivo:
          'https://cdn.www.gob.pe/uploads/document/file/6051098/5357151-anexo-2-ficha-de-inscripcion-2025.docx?v=1710443416',
      },
      {
        id: 3,
        nombre: 'Anexo 3 - ficha minima por idea de proyecto 2025',
        archivo:
          'https://cdn.www.gob.pe/uploads/document/file/6051105/5357172-anexo-3-ficha-minima-por-idea-de-proyecto-2025.docx?v=1710443486',
      },
    ],
    informes: [
      {
        id: 1,
        nombre: 'Informe de Resultados del Presupuesto Participativo 2025',
        archivo:
          'https://cdn.www.gob.pe/uploads/document/file/6137099/5421000-informe-final-de-proceso-del-presupuesto-participativo-basado-en-resultados-2025.pdf?v=1712157747',
      },
    ],
  },
];

export const bdReciclaje = [
  {
    nombre_reciclable: 'Residuos Orgánicos',
    descripcion_recicable:
      'Restos de comida, infusiones y café. Heces de animales pequeños: cuy, conejo, gallina y conejo. Restos de jardinería en poca cantidad.',
    imagen: "https://cdn.www.gob.pe/uploads/document/file/8305746/1202002-residuos-organicos.png",
    dias: ['Lunes', 'Jueves', 'Sábado'],
  },
  {
    nombre_reciclable: 'Residuos Reciclables',
    descripcion_recicable:
      'Residuos no reciclables: bolsas plásticas, pañales, toallas higiénicas, envases de tecnopor, platos y vasos descartables, restos de tela, calzado viejo, colillas de cigarro, papel encerado, lapiceros y envases de pasta dental.',
      imagen: "https://cdn.www.gob.pe/uploads/document/file/8305747/1202002-residuos-reciclables.png",
    dias: ['Miércoles'],
  },
  {
    nombre_reciclable: 'Residuos No Reciclables',
    descripcion_recicable:
      'Bolsas de plástico, pañales, tecnopor, descartables, colillas, textiles, artículos de higiene, etc. Cajas plastificadas de tortas, juguetes, jarabes, electrodomésticos, etc. Vidrios: botellas hasta 6 unidades, lunas, espejo y vasos. Heces de mascota: perros y gatos. Huesos, vísceras (pollo y pescado), plumas (aves), y pelos. Envolturas de golosinas, abarrotes y detergente.',
    imagen: "https://cdn.www.gob.pe/uploads/document/file/8305748/1202002-residuos-no-reciclables.png",
    dias: ['Martes', 'Viernes'],
  },
];

export default bdPresupuesto;
