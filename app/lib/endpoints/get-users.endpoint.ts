import axios from 'axios'
import { UserType } from '@/app/lib/definitions'
import { showCustomToast } from '@/app/components/toast/toast'

export const getUsersEndpoint = async (): Promise<UserType[]> => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            showCustomToast(error.message || 'Something went wrong!', 'error')
        } else {
            showCustomToast('Something went wrong!', 'error')
        }
        throw error
    }
}
