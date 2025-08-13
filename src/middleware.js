// import { NextResponse } from "next/server";

// export const middleware = (req) => {
//     return NextResponse.next();
// }

// export const config = {
//   matcher: '/user-profile' 
// };          





// import { NextResponse } from "next/server";

// export const middleware = (req) => {
//     return NextResponse.redirect(new URL('/about', req.url));
// }

// export const config = {
//   matcher: '/user-profile' 
// };   



// import { NextResponse } from "next/server";

// export const middleware = (req) => {
//     return NextResponse.rewrite(new URL('/about/history', req.url));
// }

// export const config = {
//   matcher: '/about' 
// };   


import { NextResponse } from "next/server";

export const middleware = (req) => {
    return NextResponse.redirect(new URL('/about/history', req.url));
}

export const config = {
  matcher: ['/about' , '/categories']
}; 