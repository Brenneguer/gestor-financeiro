import { UsuarioDTO } from './../usuario/usuarioDTO';

export interface Categoria {
  codigo: number;
  nome: string;
  usuario: UsuarioDTO;
  indDeletado: boolean;
}
