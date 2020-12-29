import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import PageLoading from 'components/PageLoading'

const requireAdmin = (ChildComponent) => {
    const ComposedComponent = (props) => {
        const router = useRouter()
        const membership = useSelector(({auth}) => auth.membership)

        useEffect(() => {
            if(membership && membership !== 'admin') {
                router.push('/')
            }
        }, [membership, router])

        return (
            membership ?
            <ChildComponent {...props} />
            :
            <PageLoading />
        )
    }

    return ComposedComponent
}

export default requireAdmin