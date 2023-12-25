// Import necessary modules
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useAuthState } from
 
"react-firebase-hooks/auth";
import { auth } from
 
"@/firebase/firebase";
import { useRouter } from
 
"next/router";
import Image from "next/image";

// Define the AuthPage component with proper naming
const AuthPage: React.FC = () => {
  // Access hooks within the component
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  // Handle user authentication and loading state
  useEffect(() => {
    if (user) {
      // Redirect to home page if user is already authenticated
      router.push("/");
    } else if (!loading) {
      // Set page loading state to false if authentication is complete
      setPageLoading(false);
    }
  }, [user, router, loading]);

  // Conditionally render content based on loading state
  if (pageLoading) {
    // Display a loading indicator while authentication is in progress
    return (
      <div className="bg-gradient-to-b from-gray-600 to-black h-screen flex items-center justify-center">
        <div className="spinner-border text-white" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Render the main content of the AuthPage
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <Image src="/hero.png" alt="Hero img" width={700} height={700} />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default AuthPage;