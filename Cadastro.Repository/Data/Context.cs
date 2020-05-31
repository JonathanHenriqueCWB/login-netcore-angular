using Cadastro.Domain.Entidades;
using Cadastro.Repository.Config;
using Microsoft.EntityFrameworkCore;

namespace Cadastro.Repository.Data
{
    public class Context : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public Context(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
