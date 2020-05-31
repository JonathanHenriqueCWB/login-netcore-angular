using Cadastro.Domain.Entidades;
using Microsoft.EntityFrameworkCore;

namespace Cadastro.Repository.Data
{
    public class Context : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public Context(DbContextOptions options) : base(options)
        {
        }
    }
}
