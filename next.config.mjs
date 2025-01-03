// /** @type {import('next').NextConfig} */
// 


export default {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"fakestoreapi.com",
                port:"",
                pathname:"/img/**",
            }
        ]
    }
}
