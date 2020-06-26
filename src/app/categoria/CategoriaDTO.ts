import { TipoDTO } from './../tipo/TipoDTO';
import { UsuarioDTO } from './../usuario/usuarioDTO';

export interface Categoria {
  codigo: number;
  nome: string;
  usuario: UsuarioDTO;
  tipo: TipoDTO;
  indDeletado: boolean;
}
