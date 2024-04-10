using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using MongoDB.Driver;
using Npgsql;
using policedep_backend.Controllers;
using policedep_backend.Database;
using policedep_backend.Models;
using policedep_backend.Services;
using policedep_backend.Services.BaseService;
using System.Data.Common;
using System.Data.SqlClient;
using System.Security.Cryptography.X509Certificates;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

var builder = WebApplication.CreateBuilder(args);
//Add all entities services
builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDB"));
builder.Services.AddScoped<BaseEntityService<Agent>, AgentService>(); 
builder.Services.AddScoped<AgentService>(); 
builder.Services.AddScoped<BaseEntityService<City>, CityService>();
builder.Services.AddScoped<CityService>();
builder.Services.AddScoped<BaseEntityService<Criminal>, CriminalService>();
builder.Services.AddScoped<CriminalService>();
builder.Services.AddScoped<BaseEntityService<Document>, DocumentService>();
builder.Services.AddScoped<DocumentService>();
builder.Services.AddScoped<BaseEntityService<Message>, MessageService>();
builder.Services.AddScoped<MessageService>();
builder.Services.AddScoped<BaseEntityService<Station>, StationService>();
builder.Services.AddScoped<StationService>();
// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();

builder.Services.AddCors(options =>
{
    var frontendURL = configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});


var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
app.MapControllers();
app.Run();
