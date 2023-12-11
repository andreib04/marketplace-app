using marketplace_api.Models;
using Microsoft.EntityFrameworkCore;

namespace marketplace_api.Repositories
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly DatabaseContext _dbContext;

        public ProductsRepository(DatabaseContext databaseContext)
        {
            _dbContext = databaseContext;
        }

        public List<Product> GetAllProducts()
        {
            return _dbContext.Products.Include(a => a.Author).ToList();
        }

        public Product GetProduct(int id)
        {
            var product = _dbContext.Products
                .Include(p => p.Author)
                .FirstOrDefault(products => products.id == id);

            if (product == null)
            {
                throw new KeyNotFoundException($"Can not found product with id {id}");
            }

            return product;
        }

        public Product PostProduct(Product product)
        {
            var user = _dbContext.Users.FirstOrDefault(user => user.id == product.authorId);

            if (user == null)
            {
                throw new KeyNotFoundException($"Can not found product with id {product.authorId}");
            }

            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
            return product;
        }

        public void EditProduct(int id, Product product)
        {
            var dbProduct = _dbContext.Products.FirstOrDefault(products => products.id == id);

            if (dbProduct == null)
            {
                throw new KeyNotFoundException($"Can not find product with id {id}");
            }

            dbProduct.title = product.title;
            dbProduct.description = product.description;
            dbProduct.price = product.price;

            _dbContext.SaveChanges();
        }

        public Product DeleteProduct(int id)
        {
            var dbProduct = _dbContext.Products.FirstOrDefault(products => products.id == id);

            if (dbProduct == null)
            {
                throw new KeyNotFoundException($"Can not find product with id {id}");
            }

            _dbContext.Products.Remove(dbProduct);
            _dbContext.SaveChanges();
            return dbProduct;
        }
    }
}
