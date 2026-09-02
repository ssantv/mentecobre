export const ROLES = {
  traductor: 'traductor',
  revisor: 'revisor',
  admin: 'admin',
}

export const MOCK_USERS = [
  {
    id: '1',
    name: 'Traductora',
    username: 'supertraductora',
    role: ROLES.traductor,
    universos: ['Cosmere', 'Citoverso', 'Alcatraz'],
    fechaAlta: '2021-03-15',
    articulos: [
      {
        tituloEs: 'La Cicatriz',
        tituloEn: 'The Scar',
        universo: 'Cosmere',
        estado: 'traducido',
      },
      {
        tituloEs: 'El ritmo de la guerra',
        tituloEn: 'Rhythm of War',
        universo: 'Cosmere',
        estado: 'traducido',
      },
      {
        tituloEs: 'Nacidos de la bruma',
        tituloEn: 'Mistborn',
        universo: 'Cosmere',
        estado: 'traducido',
      },
      {
        tituloEs: 'Citoverso',
        tituloEn: 'Citoverse',
        universo: 'Citoverso',
        estado: 'traducido',
      },
      {
        tituloEs: 'El Aliento de los Dioses',
        tituloEn: 'Warbreaker',
        universo: 'Aliento',
        estado: 'traducido',
      },
    ],
  },
  {
    id: '2',
    name: 'Revisor',
    username: 'superrevisor',
    role: ROLES.revisor,
    universos: ['Cosmere', 'Citoverso'],
    fechaAlta: '2022-08-02',
    articulos: [
      {
        tituloEs: 'La Cicatriz',
        tituloEn: 'The Scar',
        universo: 'Cosmere',
        estado: 'revisado',
      },
      {
        tituloEs: 'El ritmo de la guerra',
        tituloEn: 'Rhythm of War',
        universo: 'Cosmere',
        estado: 'traducido',
      },
      {
        tituloEs: 'Nacidos de la bruma',
        tituloEn: 'Mistborn',
        universo: 'Cosmere',
        estado: 'revisado',
      },
      {
        tituloEs: 'Citoverso',
        tituloEn: 'Citoverse',
        universo: 'Citoverso',
        estado: 'traducido',
      },
    ],
  },
  {
    id: '3',
    name: 'Admin',
    username: 'admin',
    role: ROLES.admin,
    universos: ['Cosmere', 'Citoverso', 'Alcatraz'],
    fechaAlta: '2021-01-10',
    articulos: [
      {
        tituloEs: 'La Cicatriz',
        tituloEn: 'The Scar',
        universo: 'Cosmere',
        estado: 'revisado',
      },
      {
        tituloEs: 'El ritmo de la guerra',
        tituloEn: 'Rhythm of War',
        universo: 'Cosmere',
        estado: 'traducido',
      },
      {
        tituloEs: 'Citoverso',
        tituloEn: 'Citoverse',
        universo: 'Citoverso',
        estado: 'revisado',
      },
    ],
  },
]

export const ROLES_LABEL = {
  [ROLES.traductor]: 'Traductor',
  [ROLES.revisor]: 'Revisor',
  [ROLES.admin]: 'Administrador',
}