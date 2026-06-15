export default async function ProductsDetails(
    {params,} : {params: Promise<{productID : string}>;
}) {
   
{/* here diff products will be fetched using their respective product id */}
                       
 const productiD = (await params).productID;

             return (
        <div>
           <h1>PRODUCTS PAGE details {productiD}</h1>;
        </div>
             )
}