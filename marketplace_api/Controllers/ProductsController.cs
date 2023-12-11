using marketplace_api.Models;
using marketplace_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace marketplace_api.Controllers
{
    [Controller]
    [Route("/api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public ActionResult GetAllProducts()
        {
            try
            {
                var products = _productsService.GetAllProducts();
                return new OkObjectResult(products);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetProduct(int id)
        {
            try
            {
                var products = _productsService.GetProduct(id);
                return new OkObjectResult(products);
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpPost]
        public ActionResult PostProduct([FromBody] Product product)
        {
            try
            {
                var dbProduct = _productsService.PostProduct(product);
                return new OkObjectResult(product);
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpPut("{id}")]
        public ActionResult EditProduct(int id, [FromBody] Product product)
        {
            try
            {
                _productsService.EditProduct(id, product);
                return new NoContentResult();
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteArticle(int id)
        {
            try
            {
                Product dbProduct = _productsService.DeleteProduct(id);
                return new OkObjectResult(dbProduct);
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }
    }
}
