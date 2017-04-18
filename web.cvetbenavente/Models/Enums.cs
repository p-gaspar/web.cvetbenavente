﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web.cvetbenavente.Models
{
    public class Enums
    {
        public enum Genero
        {
            M,
            F
        }

        public enum TipoAtivo
        {
            Ambos,
            Ativo,
            Inativo
        }

        public enum OrderClientes
        {
            NoOrder,
            Nome,
            Contacto,
            Morada,
            Active
        }

        public enum OrderDirection
        {
            Asc,
            Desc
        }
    }
}