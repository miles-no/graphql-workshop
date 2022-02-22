using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace Jukebox.Data;

[DebuggerDisplay("{Name} (ArtistId = {ArtistId})")]
public class Artist
{
    [Key] public int ArtistId { get; set; }

    [Required] [MaxLength(120)] public string Name { get; set; }

    //public IList<Album> Albums { get; set; }
}