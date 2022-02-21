using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Jukebox.Data;
using Microsoft.EntityFrameworkCore;

namespace Jukebox.Api.Artist;

[ExtendObjectType(typeof(Data.Album))]
public class AlbumArtistResolver
{
    public async Task<Data.Artist> GetArtist([Parent] Data.Album album, [Service] DatabaseContext databaseContext)
    {
        return await databaseContext.Artist.SingleAsync(x => x.ArtistId == album.ArtistId);
    }
}