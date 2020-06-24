import { Categoria } from './../categoria/CategoriaDTO';
import { UsuarioDTO } from '../usuario/usuarioDTO';

export interface ContaAPagarDTO {
  codigo: number;
  titulo: string;
  usuario: UsuarioDTO;
  categoria: Categoria;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  indPago: boolean;
  indDeletado: boolean;
}
