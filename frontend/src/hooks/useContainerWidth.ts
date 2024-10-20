import { useState, useEffect, type RefObject } from 'react'

export function useContainerWidth(elementRef?: RefObject<HTMLDivElement>): number | undefined {
    const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined)

    useEffect(() => {
        const handleResize = () =>
            setContainerWidth(elementRef?.current?.getBoundingClientRect().width || window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [window.innerWidth])

    return containerWidth
}

export const useWindowWidth = () => {
    const currentWidth = useContainerWidth() || 0
    return {
        isMdView: currentWidth > 768,
        isLgView: currentWidth > 1024,
        isXlView: currentWidth > 1280,
    }
}
