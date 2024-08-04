import React from 'react'

const formSignInNtry = () => {

    const on submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrorLogin("");
        try{
            const signInCredentials = await signIn("credentials". {
                username,
                password
            });

            if(signInCredentials?.error?.includes("CredentialsSignIn")){
                setErrorLogin("Invalid Username or Password");
                throw new Error("invalid credentials")
            }

            router.replace("samplelogin/accesspage");
        }
    }
    catch(error){
        console.error(error);
    }
  return (
    <div>formSignInNtry</div>
  )
}

export default formSignInNtry