using marketplace_api.Models;

namespace marketplace_api.Repositories
{
    public interface IProductsRepository
    {
        List<Product> GetAllProducts();
        Product GetProduct(int id);
        Product PostProduct(Product product);
        void EditProduct(int id, Product product);
        Product DeleteProduct(int id);
    }
}
