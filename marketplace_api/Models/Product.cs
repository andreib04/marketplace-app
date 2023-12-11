namespace marketplace_api.Models
{
    public class Product
    {
        public int id { get; set; }
        public int authorId { get; set; }
        public User Author { get; set; } 
        public string title { get; set; }
        public string description { get; set; } 
        public double price { get; set; }   
    }
}
