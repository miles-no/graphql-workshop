using HotChocolate.Types;
using Jukebox.Data;

namespace Jukebox.Api.Category;

public class CategoryType : ObjectType<Genre>
{
    protected override void Configure(IObjectTypeDescriptor<Genre> descriptor)
    {
        descriptor.Field(x => x.GenreId).Name("id");
        descriptor.Field(x => x.Name);
    }
}