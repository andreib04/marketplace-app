using Microsoft.EntityFrameworkCore;
using marketplace_api.Models;

namespace marketplace_api.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly DatabaseContext _dbContext;

        public UsersRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<User> GetAllUsers()
        {
            return _dbContext.Users.Include(u => u.Products).ToList();
        }

        public User GetUser(int id)
        {
            var user = _dbContext.Users.Include(u => u.Products).FirstOrDefault(user => user.id == id);

            if(user == null)
            {
                throw new KeyNotFoundException($"Can not found user with id {id}");
            }

            return user;
        }

        public User PostUser(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
            return user;
        }

        public void EditUser(int id, User user)
        {
            var dbUser = _dbContext.Users.FirstOrDefault(user => user.id == id);

            if(dbUser == null)
            {
                throw new KeyNotFoundException($"Can not found user with id {id}");
            }

            dbUser.firstName = user.firstName;
            dbUser.lastName = user.lastName;
            dbUser.email = user.email;
            dbUser.password = user.password;
            dbUser.phone = user.phone;

            _dbContext.SaveChanges();
        }

        public User DeleteUser(int id)
        {
            var dbUser = _dbContext.Users.FirstOrDefault(user => user.id == id);

            if(dbUser == null)
            {
                throw new KeyNotFoundException($"Can not found user with id {id}");
            }

            _dbContext.Users.Remove(dbUser);
            _dbContext.SaveChanges();
            return dbUser;
        }
    }
}
