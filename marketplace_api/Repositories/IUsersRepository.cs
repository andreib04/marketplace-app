using marketplace_api.Models;

namespace marketplace_api.Repositories
{
    public interface IUsersRepository
    {
        List<User> GetAllUsers();
        User GetUser(int id);
        User PostUser(User user);
        void EditUser(int id, User user);
        User DeleteUser(int id);
    }
}
