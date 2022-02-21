using System;
using HotChocolate.Types;
using Humanizer;

namespace Jukebox.Api.Track;

public class TrackType : ObjectType<Data.Track>
{
    protected override void Configure(IObjectTypeDescriptor<Data.Track> descriptor)
    {
        descriptor.Field(x => x.TrackId).Name("id");
        descriptor.Field(x => x.Name);
        descriptor.Field("duration")
            .Resolve(x => TimeSpan.FromMilliseconds(x.Parent<Data.Track>().Milliseconds).Humanize(3));
    }
}