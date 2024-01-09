namespace marketplace_api.Models
{
    public class User
    {
        public int id {  get; set; }
        public string firstName { get; set; } = null!;
        public string lastName { get; set; } = null!;
        public string email { get; set; } = null!;
        public string password { get; set; } = null!;
        public string phone { get; set; } = null!;

        public string Role { get; set; } = "";

        public List<Product> Products { get; set; } = new List<Product>();
    }
}
