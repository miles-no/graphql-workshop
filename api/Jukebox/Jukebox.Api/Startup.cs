using System.IO;
using HotChocolate.Execution;
using HotChocolate.Types;
using Jukebox.Api.Category;
using Jukebox.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Sprinkles;

namespace Jukebox.Api;

public class Startup
{
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
        var path = Path.GetFullPath("../../../data/database.db");
        services.AddDbContext<DatabaseContext>(c => c.UseSqlite($"Data Source={path}"));

        services.AddCors(options =>
        {
            options.AddPolicy("AllowAll",
                builder =>
                {
                    builder
                        .WithOrigins("http://localhost:3000") 
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                });
        });
        
        services.AddGraphQLServer()
            .AutoRegister<JukeboxQuery, JukeboxMutation>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment()) app.UseDeveloperExceptionPage();

        app.UseRouting();

        app.UseCors("AllowAll");
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapGraphQL();
            endpoints.MapGet("/", async context => { await context.Response.WriteAsync("Hello World!"); });
        });
        
        
    }
}