import { TaskProvider } from "./TaskContext"
import ListItem from "../component/ui/ListItem"
import Card from "../component/ui/Card"
const HomePage = () => {
    return (
        <TaskProvider>
            <Card >

                <ListItem showActions={false} />
            </Card>

        </TaskProvider>
    )
}

export default HomePage