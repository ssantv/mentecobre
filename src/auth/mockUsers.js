export const ROLES = {
  traductor: 'traductor',
  revisor: 'revisor',
  admin: 'admin',
}

// Contraseñas provisionales de la maqueta, separadas del resto de datos de
// usuario: la DDBD jamás sirve contraseñas, solo el backend autentica. Se
// usa únicamente en el modo mock de src/api/auth.js mientras no haya backend.
export const MOCK_CREDENCIALES = {
  traductor: 'traductor123',
  revisor: 'revisor123',
  admin: 'admin123',
}

export const ROLES_LABEL = {
  [ROLES.traductor]: 'Traductor',
  [ROLES.revisor]: 'Revisor',
  [ROLES.admin]: 'Administrador',
}