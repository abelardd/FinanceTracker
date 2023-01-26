import {useEffect, useState} from 'react'
import { projectAuth} from "../firebase/config"
import { useAuthContext} from "./UseAuthContext";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {
    const [isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()
    const {dispatch} = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)
        navigate('/login')

        //sign the user out

        try {
            await projectAuth.signOut()

            // dispatch logout action
            dispatch({type: 'LOGOUT'})

            //update state

            if (!isCanceled) {
                setIsPending(false)
                setError(null)
            }


        } catch (err) {
            if (!isCanceled) {
                setIsPending(false)
                setError(err.message)
            }

        }
    }
        useEffect(() => {
            return () => setIsCanceled(true)
        }, [])

        return {logout, error, isPending}
    }

