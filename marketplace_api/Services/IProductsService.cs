using marketplace_api.Models;

namespace marketplace_api.Services
{
    public interface IProductsService
    {
        List<Product> GetAllProducts();
        Product GetProduct(int id);
        Product PostProduct(Product product);
        void EditProduct(int id, Product product);
        Product DeleteProduct(int id);
    }
}
