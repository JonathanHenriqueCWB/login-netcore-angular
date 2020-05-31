using Cadastro.Domain.Contratos;
using Cadastro.Domain.Entidades;
using Cadastro.Repository.Data;

namespace Cadastro.Repository.Repository
{
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(Context context) : base(context)
        {
        }
    }
}
