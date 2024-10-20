import { useLocation } from 'react-router-dom'

export const useCurrentLocation = () => {
    const location = useLocation()

    const selectedLocation = (value: string) => {
        const isSelectedLocation = location.pathname.replaceAll('/', '') === value

        if (isSelectedLocation) {
            return 'primary'
        }

        return 'default'
    }

    return { selectedLocation }
}
