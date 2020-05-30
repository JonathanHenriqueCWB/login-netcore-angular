using System;
using System.Collections.Generic;

namespace Cadastro.Domain.Contratos
{
    public interface IBaseRepository<TEntity> :IDisposable where TEntity : class
    {
        IEnumerable<TEntity> Listar();
        void Cadastrar(TEntity entity);
        void Atualizar(TEntity entity);
        void Remover(TEntity entity);
    }
}
