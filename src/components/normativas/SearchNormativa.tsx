export const SearchNormativa = () => {
  
    return (
        <div>
            <p>
                Filtrar por:
            </p>

            <div className="flex gap-6 justify-center flex-col">
                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">
                        Tipo de documento
                    </label>
                    <div className="mt-2">
                        <select className="p-2 border border-gray-300 rounded w-full">
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">
                        Filtrar por Año
                    </label>
                    <div className="mt-2">
                        <select className="p-2 border border-gray-300 rounded w-full">
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">
                        Buscar por nombre:
                    </label>
                    <div className="mt-2">
                        <input type="text" name="last-name" id="last-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>
                <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
                    Buscar
                </button>
            </div>
        </div>
    )
}
