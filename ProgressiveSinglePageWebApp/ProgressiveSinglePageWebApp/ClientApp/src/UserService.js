// const userCookie = "USER";
// const cookieSplitter = ';'

// export class UserService {

//   setUserToCookie(username) {
//     var value = `${userCookie}=${username}`
//     var [index, cookies] = this.getUserFromCookie();
//     if (!cookies) cookies = `${userCookie}=${username}`;
//     else { 
//       if (!index) index = cookies.length;
//       cookies[index] = value;
//     }
    
//     document.cookie = cookies.join(cookieSplitter)
//   }

//   getUserFromCookie() {
//     var cookies = document.cookie.split(cookieSplitter).map(a => a.trim());
//     for (var i in cookies) {
//       var splits = cookies[i].split('=')
//       if (splits.length && splits[0] == userCookie) {
//         return [i, cookies];
//       }
//     }
//     return [,,];
//   }

// }

