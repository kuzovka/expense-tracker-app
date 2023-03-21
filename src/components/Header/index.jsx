import 'components/Header/styles.css'
import Statistics from 'components/Statistics'

function Header() {
    return (
        <div className="backGround w-screen flex flex-col justify-center py-8">
            <div className="min-w-xl text-center font-normal text-3xl text-white mb-4">
                Расходы за 2023
            </div>
            <div className="min-w-xl text-center font-bold text-4xl text-white">
                <p>- 100 руб.</p>
            </div>
            <Statistics />
        </div>
    )
}

export default Header