namespace Jukebox.Api.Album;

public class AddReviewInput
{
    public int AlbumId { get; set; }
    public string Comment { get; set; }
    public int? Rating { get; set; }
}