const MASTER_URL='https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'
import { gql, request } from 'graphql-request'

const getAllBuisnessList=async()=>{
    const query=gql`
    query BuisnessList {
        businessLists {
          images {
            url
            id
          }
          name
          receivingDate
          pricing
        }
      }   
    `
    const result=await request(MASTER_URL,query)
    return result
}

export default{
    getAllBuisnessList
}