import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ],
      callbacks:{
        //Invokes on successfull signIn
        async signIn({profile}){
            //1. connect to DB
            //2. check if user exists
            //3. if not, add user to DB
            //4. return true to allow sign in
        },
        //Modifies the session
        async session({session}){
            //1. get user from DB
            //2. Assignth euswr id to the session
            //3. return session
        }
      }
}