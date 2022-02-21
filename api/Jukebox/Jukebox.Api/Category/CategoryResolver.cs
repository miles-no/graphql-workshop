using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Jukebox.Data;
using Microsoft.EntityFrameworkCore;

namespace Jukebox.Api.Category;

[ExtendObjectType(typeof(JukeboxQuery))]
public class CategoryResolver
{
    public Task<List<Genre>> GetCategories([Service] DatabaseContext context, CancellationToken token)
    {
        return context.Genre.ToListAsync(token);
    }
    
    public Task<Genre> GetCategory(int id, [Service] DatabaseContext context, CancellationToken token)
    {
        return context.Genre.SingleAsync(x => x.GenreId == id);
    }
    
    
}