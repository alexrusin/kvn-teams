import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const requireAuth = (ChildComponent) => {
    const ComposedComponent = (props) => {
        const router = useRouter()
        const membership = useSelector(({auth}) => auth.membership)

        useEffect(() => {
            if(membership === 'guest') {
                router.push('/')
            }
        }, [membership, router])

        return (
            <ChildComponent {...props} />
        )
    }

    return ComposedComponent
}

export default requireAuth