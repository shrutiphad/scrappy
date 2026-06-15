// "use client";
import { notFound } from "next/navigation";

export default async function ProductReview (
    {params,} : {
        params : Promise <{productID : string; reviewsID : string}>;
    }
){
    const {productID , reviewsID} = await params;

     if (parseInt(reviewsID) > 1000) {
    notFound();
      }
  
    return (
        <div>
            review {reviewsID}of the product {productID}
            </div>
    )
}