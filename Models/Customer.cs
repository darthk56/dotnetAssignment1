
using System.ComponentModel.DataAnnotations;

public class Customer
{
    public int CustomerId { get; set; }
    [Required]
    public string CompanyName {get; set;}
 }