using Cadastro.Domain.Contratos;
using Cadastro.Repository.Data;
using System;
using System.Collections.Generic;

namespace Cadastro.Repository.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly Context _context;
        public BaseRepository()
        {

        }

        public IEnumerable<TEntity> Listar()
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Atualizar(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Remover(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
