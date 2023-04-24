import 'components/Statistics/styles.css'

const names = ["Еда", "Аренда", "Одежда", "Образование", "Путешествия", "Развлечения", "Все расходы"]

function Statistics ({ payments, setCurrentCategory }) {

    const totalAmount = payments.reduce((acc, payment, i, arr) => {
        return acc + payment.cost
    }, 0)

    const getCategoryAmount = (category) => {
        let amount = 0
        payments.map(p => {
            if (p.name === category) {
                amount += p.cost
            }
            else if (category === "Все расходы") {
                amount = totalAmount
            }
        })
        return amount
    }


    return (
        <div className="backGround w-screen flex flex-col justify-center py-12">
            <div className="min-w-xl text-center font-normal text-4xl text-white mb-4">
                Расходы за 2023 год
            </div>
            <div className="min-w-xl text-center font-bold text-5xl text-white">
                <p>- {totalAmount} руб.</p>
            </div>
            <div className="flex mt-8 gap-x-3 max-w-2xl m-auto">

            <div className="flex flex-col gap-y-2 m-6">
                {names.map(name => {
                    return (
                        <div key={name} className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                            <div className="bg-slate-300 px-3 py-3"></div>
                            <p
                                onClick={() => setCurrentCategory(name)}
                                className="pl-3 pr-20 py-2 hover:underline hover:underline-offset-4">{name}: <strong>{getCategoryAmount(name)}</strong> руб.</p>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}


export default Statistics