using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Jukebox.Data;
using Microsoft.EntityFrameworkCore;

namespace Jukebox.Api.Track;

[ExtendObjectType(typeof(Data.Track))]
public class TrackResolver
{
    public async Task<Data.Album> GetAlbum([Parent] Data.Track track, [Service] DatabaseContext databaseContext)
    {
        return await databaseContext.Album.SingleAsync(x => x.AlbumId == track.AlbumId);
    }
}