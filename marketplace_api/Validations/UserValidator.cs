using FluentValidation;
using marketplace_api.Models;

namespace marketplace_api.Validations
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator() 
        {
            RuleFor(person => person.firstName).NotNull().NotEmpty();
            RuleFor(person => person.lastName).NotNull().NotEmpty();
            RuleFor(person => person.phone).NotNull().NotEmpty();

            RuleFor(person => person.email).NotNull().NotEmpty().EmailAddress();
            RuleFor(person => person.password)
                .NotNull().NotEmpty()
                .MinimumLength(8)
                .Must(password => password.FirstOrDefault(character => character >= 'a' &&
                character <= 'z') != 0)
                    .WithMessage("Password should contain at least one lowercase letter")
                .Must(password => password.FirstOrDefault(character => character >= 'A' &&
                character <= 'Z') != 0)
                    .WithMessage("Password should contain at least one upercase letter")
                .Must(password => password.FirstOrDefault(character => character >= '0' &&
                character <= '9') != 0)
                    .WithMessage("Password should contain at least one digit")
                .Must(password => password.FirstOrDefault(character => "!@#$%^&*()_-+=".Contains(character)) != 0)
                    .WithMessage("Password should contain at least one special character");
        }
    }
}
