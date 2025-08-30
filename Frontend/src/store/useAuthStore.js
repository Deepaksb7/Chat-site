import {create} from "zustand"

export const useAuthStore = create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingInf:false,
    isUpdatingProfile:false,

    isCheckingAuth:true,
}))