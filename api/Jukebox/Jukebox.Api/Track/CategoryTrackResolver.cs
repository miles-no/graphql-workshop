using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Jukebox.Data;
using Microsoft.EntityFrameworkCore;

namespace Jukebox.Api.Track;

[ExtendObjectType(typeof(Genre))]
public class CategoryTrackResolver
{
    public async Task<List<Data.Track>> GetTracks([Parent] Genre category, [Service] DatabaseContext databaseContext, CancellationToken cancellationToken)
    {
        return await databaseContext.Track.Where(x => x.GenreId == category.GenreId).ToListAsync(cancellationToken);
    }
}