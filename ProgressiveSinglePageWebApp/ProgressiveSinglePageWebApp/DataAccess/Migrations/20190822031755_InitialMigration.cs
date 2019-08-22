using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProgressiveSinglePageWebApp.DataAccess.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SampleItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ChangedOn = table.Column<DateTimeOffset>(nullable: false),
                    ChangedBy = table.Column<string>(nullable: true),
                    VersionNumber = table.Column<long>(nullable: false),
                    Longitude = table.Column<double>(nullable: false),
                    Latitude = table.Column<double>(nullable: false),
                    Observations = table.Column<string>(nullable: true),
                    MyIntProperty = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SampleItems", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SampleItems");
        }
    }
}
