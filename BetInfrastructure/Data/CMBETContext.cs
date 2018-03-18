using System;
using BetCore.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BetInfrastructure.Data
{
    public partial class CMBETContext : DbContext
    {
        public virtual DbSet<Match> Match { get; set; }
        public virtual DbSet<Result> Result { get; set; }
        public virtual DbSet<Team> Team { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Setting> Settings { get; set; }

        public CMBETContext(DbContextOptions<CMBETContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Match>(entity =>
            {
                entity.Property(e => e.MatchTime).HasColumnType("datetime");

                entity.HasOne(d => d.Team1)
                    .WithMany(p => p.MatchTeam1)
                    .HasForeignKey(d => d.Team1Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Match_Team");

                entity.HasOne(d => d.Team2)
                    .WithMany(p => p.MatchTeam2)
                    .HasForeignKey(d => d.Team2Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Match_Team1");
            });

            modelBuilder.Entity<Setting>(entity =>
            {
                entity.Property(e => e.FromDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Result>(entity =>
            {
                entity.HasOne(d => d.Match)
                    .WithMany(p => p.Result)
                    .HasForeignKey(d => d.MatchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Result_Match");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Result)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Result_User");
            });

            modelBuilder.Entity<Team>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.DisplayName).HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });
        }
    }
}
