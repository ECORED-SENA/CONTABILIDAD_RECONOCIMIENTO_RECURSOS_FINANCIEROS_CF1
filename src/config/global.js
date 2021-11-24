export default {
  global: {
    componenteFormativo: 'Contabilidad y hechos económicos',
    descripcionCurso:
      'El componente proporciona los elementos conceptuales básicos para iniciar la comprensión de los principios contables y su registro con los consecuentes soportes que evidencian los hechos económicos. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco conceptual e importancia de la información contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objeto de la contabilidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Interesados de la información contable',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cualidades de la información contable',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Fundamentos contables',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Elementos de los estados financieros',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Hechos económicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Operaciones y registros contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Reconocimiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medición',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Bases de medición',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Baja de cuentas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Soportes contables',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8047 ',
    },
    {
      referencia:
        'Cuaspa, C. (2013). Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud. Universidad Nacional de Colombia. ',
      link: 'https://repositorio.unal.edu.co/handle/unal/20782',
    },
    {
      referencia:
        'Decreto 2420 de 2015. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Diciembre 14 de 2015.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Dirección Financiera y Control De Gestión. (s. f.). Fichas técnicas multimedia. Supuesto práctico de un ciclo contable completo. ',
      link:
        'http://contenidos.campuslearning.es/CONTENIDOS/363/curso/pdf/FICHA-PDD-U15-A1-D1-PDF%20N%C2%BA%201.pdf',
    },
    {
      referencia:
        'Herz, J. (2018). Apuntes de contabilidad financiera. Universidad Peruana de Ciencias Aplicadas. ',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=nlebk&AN=2221446&lang=es&site=ehost-live',
    },
    {
      referencia:
        'International Accounting Standards Board. (2018). Marco Conceptual para la Información Financiera. IFRS. ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-iasb-emitidas-en-2018/5-c-marco-conceptual-para-la',
    },
    {
      referencia:
        'IFRS Foundation. (2018). Políticas Contables, Cambios en las Estimaciones Contables y Errores (NIC 8 GI). ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
    },
    {
      referencia:
        'Pérez, J. y Fol, R. (2019). Manual de casos prácticos de ISR 2019. Tax Editores. ',
    },
    {
      referencia:
        'Santos-Cid, C. (2018). Una mirada a la historia de la Contabilidad. Revista Cubana De Finanzas y Precios, 2(1), p. 139-155. ',
      link:
        'https://www.mfp.gob.cu/revista_mfp/index.php/RCFP/article/view/10_V2N12018_CMSC',
    },
    {
      referencia:
        'Gaviria, E. (2011). Impuesto de Industria y Comercio. Especialidad en Comercio. ',
      link: 'https://especialidadencomercio.webnode.es/impuestos/reteica',
    },
    {
      referencia:
        'Tapia, C. y Jiménez, J. (2018). Cómo entender finanzas sin ser financiero. Instituto Mexicano de Contadores Públicos. ',
    },
    {
      referencia:
        'Vilches, R. (2019). Apuntes de contabilidad básica. El Cid Editor. ',
    },
    {
      referencia:
        'Warren, C., Reeve, J. y Duchac, J. (2016). Contabilidad financiera. Cengage Learning.  ',
      link:
        'https://webooks.co/images/team/academicos/contabilidad/pdfuniversales/1.Contabilidad%20financiera.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capital',
      significado:
        'Representa el valor por los aportes de los socios; puede darse en recursos monetarios, dinero, o aportando en recursos físicos para que la empresa opere, valorados de forma monetaria, financiera o industrial.',
    },
    {
      termino: 'Costo histórico',
      significado: 'Es el valor de la transacción de la operación.',
    },
    {
      termino: 'Cuenta',
      significado:
        'Es la denominación técnica del registro de información financiera para evidenciar los hechos económicos de la empresa.',
    },
    {
      termino: 'Cuentas reales',
      significado:
        'Son las cuentas que conforman el estado de balance o situación financiera, las cuales son: activo, pasivo y patrimonio. Definen cómo la empresa obtiene o pudo obtener los activos, con recursos de pasivos o de patrimonio.',
    },
    {
      termino: 'Cuentas de resultado',
      significado:
        'La operación de una empresa en un periodo determinado se registra a través de estas cuentas, que son el grupo que registra los ingresos obtenidos y todos los gastos en que debe incurrir la empresa para operar y al final obtener un resultado de beneficio o pérdida.',
    },
    {
      termino: 'Debe',
      significado:
        'Significa registrar el valor monetario al lado izquierdo, representa regularmente un cargo.',
    },
    {
      termino: 'Caja y Bancos',
      significado:
        'Es el dinero efectivo y líquido que se encuentra en las cuentas de caja y en las cuentas de ahorro y cuentas corrientes en Bancos, y que están disponibles en el momento.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'Es un estado integrado por los elementos de activo, pasivo y patrimonio.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Es un estado financiero compuesto por las cuentas de ingresos, gastos y costos, que reflejan el resultado del ejercicio.',
    },
    {
      termino: 'Haber',
      significado:
        'Corresponde al registro al lado derecho, regularmente representan abonos.',
    },
    {
      termino: 'Partida doble',
      significado:
        'Es la igualdad que debe existir entre los registros del debe y el haber en el asiento contable, presentando un equilibrio. Todo lo que se posee y de dónde proviene.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Es la diferencia presentada entre activo y pasivo. Representa el aporte de los socios y el crecimiento o disminución del capital vía utilidad o pérdidas.',
    },
  ],
  complementario: [
    {
      texto:
        'Apuntes de contabilidad financiera. Universidad Peruana de Ciencias Aplicadas.',
      tipo: 'Libro',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=nlebk&AN=2221446&lang=es&site=ehost-live',
    },
    {
      texto:
        'Warren, C., Reeve, J. y Duchac, J. (2016). Contabilidad financiera. Cengage Learning.',
      tipo: 'Libro',
      descarga: '/downloads/1.Contabilidad-financiera.pdf',
    },
    {
      texto:
        'International Accounting Standards Board. (2018). Marco Conceptual para la Información Financiera. IFRS.',
      tipo: 'PDF',
      descarga: '/downloads/5-c-Marco-Conceptual-para-la.pdf',
    },
    {
      texto:
        'Urieles, S. (2014, julio 4). Contabilidad para principiantes 1 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/hsSn-mEnP5k',
    },
    {
      texto:
        'LiMeyer. (2020, mayo 4). Responsables y no responsables del I.V.A. en Colombia [SENA] [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?app=desktop&v=a_FHEKYZkxw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor pedagógico y metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
