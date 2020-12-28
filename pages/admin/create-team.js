import requireAdmin from 'components/requireAdmin'

const CreateTeam = () => {
    return (
        <div>
            This is create team component
        </div>
    )
}

export default requireAdmin(CreateTeam)