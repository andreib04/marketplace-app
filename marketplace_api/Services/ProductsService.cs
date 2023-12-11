using marketplace_api.Repositories;
using marketplace_api.Models;

namespace marketplace_api.Services
{
    public class ProductsService : IProductsService
    {
        private readonly IProductsRepository _productsRepository;

        public ProductsService(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public List<Product> GetAllProducts()
        {
            return _productsRepository.GetAllProducts();
        }
        
        public Product GetProduct(int id)
        {
            return _productsRepository.GetProduct(id);
        }

        public Product PostProduct(Product product)
        {
            return _productsRepository.PostProduct(product);
        }

        public void EditProduct(int id, Product product)
        {
            _productsRepository.EditProduct(id, product);
        }

        public Product DeleteProduct(int id)
        {
            return _productsRepository.DeleteProduct(id);
        }
    }
}
