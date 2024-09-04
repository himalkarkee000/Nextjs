import { notFound } from 'next/navigation';

// export default function ReviewDetail({
//     params,
// }:{
//     params:{
//         productid: string;
//         reviewid: string;
//     };
// }) {

//     return(

//     <h1>
//     Review {params.reviewid} for product{params.productid}
//     </h1>
//     )
// }


import React from 'react'

const page = ({ params, }: {
    params: {
        productid: string;
        reviewid: string;
    };

}) => {
    if(parseInt(params.reviewid)>1000){

        notFound()
    }
    return (
        <div>
            <h1> Review {params.reviewid} for product{params.productid}

            </h1>
        </div>
    )
}

export default page
