using Microsoft.EntityFrameworkCore;

namespace Jukebox.Data
{
    public class DatabaseContext : DbContext
    {        public DatabaseContext(DbContextOptions<DatabaseContext> contextOptions) : base(contextOptions)
        {
        }

        public DbSet<Genre> Genre { get; set; }
        public DbSet<Album> Album { get; set; }
        public DbSet<Track> Track { get; set; }
        public DbSet<Artist> Artist { get; set; }
        public DbSet<AlbumReview> AlbumReview { get; set; }
    }
}
