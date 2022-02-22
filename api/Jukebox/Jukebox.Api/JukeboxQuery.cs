using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate;
using Jukebox.Data;
using Microsoft.EntityFrameworkCore;

namespace Jukebox.Api;

public class JukeboxQuery
{
    public Task<List<Genre>> GetCategories([Service] DatabaseContext context, CancellationToken token)
    {
        return context.Genre.ToListAsync(token);
    }
    
    public Task<Genre> GetCategory(int id, [Service] DatabaseContext context, CancellationToken token)
    {
        return context.Genre.SingleAsync(x => x.GenreId == id, cancellationToken: token);
    }
   
    public Task<List<Data.Artist>> GetArtists([Service] DatabaseContext context, CancellationToken token)
    {
        return context.Artist.ToListAsync(token);
    }
    public Task<Data.Artist> GetArtist(int id, [Service] DatabaseContext context, CancellationToken token)
    {
        return context.Artist.SingleAsync(x => x.ArtistId == id, token);
    }

    public Task<List<Data.Album>> GetAlbums([Service] DatabaseContext context, CancellationToken token)
    {
        return context.Album.ToListAsync(token);
    }
    public Task<Data.Album> GetAlbum(int id, [Service] DatabaseContext context, CancellationToken token)
    {
        return context.Album.SingleAsync(x => x.AlbumId == id, token);
    }
    
    public Task<Data.Track> GetTrack(int id, [Service] DatabaseContext context, CancellationToken token)
    {
        return context.Track.SingleAsync(x => x.TrackId == id, token);
    }
   
}