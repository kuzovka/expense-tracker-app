import 'components/Statistics/styles.css'


function Statistics () {

    return (
        <div className="backGround w-screen flex flex-col justify-center py-8">
            <div className="min-w-xl text-center font-normal text-3xl text-white mb-4">
                Расходы за 2023
            </div>
            <div className="min-w-xl text-center font-bold text-4xl text-white">
                <p> - 0 руб.</p>
            </div>
            <div className="flex justify-between mt-8 gap-x-3 max-w-2xl m-auto">

            <div className="flex flex-col gap-y-2 m-6">
                <div className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                    <div className="bg-slate-300 px-3 py-3"></div>
                    <p className="px-3 py-2 hover:underline hover:underline-offset-4">Еда: <strong>0</strong> руб.</p>
                </div>
                <div className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                    <div className="bg-orange-200 px-3 py-3"></div>
                    <p className="px-3 py-2 hover:underline hover:underline-offset-4">Аредна: <strong>0</strong> руб.</p>
                </div>
                <div className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                    <div className="bg-green-200 px-3 py-3"></div>
                    <p className="px-3 py-2 hover:underline hover:underline-offset-4">Одежда: <strong>0</strong> руб.</p>
                </div>
                <div className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                    <div className="bg-sky-200 px-3 py-3"></div>
                    <p className="px-3 py-2 hover:underline hover:underline-offset-4">Образование: <strong>0</strong> руб.</p>
                </div>
                <div className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                    <div className="bg-violet-200 px-3 py-3"></div>
                    <p className="pl-3 pr-20 py-2 hover:underline hover:underline-offset-4">Путешествия: <strong>0</strong> руб.</p>
                </div>
                <div className="bg-gray-200 text-slate-500 flex flex-row cursor-pointer">
                    <div className="bg-rose-200 px-3 py-3"></div>
                    <p className="px-3 py-2 hover:underline hover:underline-offset-4">Развлечения: <strong>0</strong> руб.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Statistics