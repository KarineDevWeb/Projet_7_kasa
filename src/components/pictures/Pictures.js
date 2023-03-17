import './pictures.scss'
import data from '../../database/database'
import Card from '../card/Card'

function Pictures() {

    return (
        <main className='home_pictures'>
            {data.map(database => {
                return (
                    <Card
                    key={database.id}
                    id={database.id}
                    title={database.title}
                    cover={database.cover}
                    />
                )
            })}
        </main>
    )
}

export default Pictures;
