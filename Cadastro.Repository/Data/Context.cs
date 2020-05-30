using Cadastro.Domain.Entidades;
using Microsoft.EntityFrameworkCore;

namespace Cadastro.Repository.Data
{
    class Context : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public Context(DbContextOptions options) : base(options)
        {
        }
    }
}
