using Cadastro.Domain.Contratos;
using Cadastro.Repository.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Cadastro.Repository.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly Context Context;
        public BaseRepository(Context context)
        {
            Context = context;
        }

        public IEnumerable<TEntity> Listar()
        {
            return Context.Set<TEntity>().ToList();
        }

        public void Cadastrar(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
            Context.SaveChanges();
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
