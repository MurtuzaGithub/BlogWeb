import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

//Useing Google Cloud Api for SignUp

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.Google_ID,
        clientSecret: process.env.Google_SECRET,
      }),
  
      GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
  };