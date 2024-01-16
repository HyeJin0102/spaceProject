

const letterItem = ({ letter }) => {
    return (
        <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{letter.title}</h2>
                <p className="mt-2 text-base text-gray-200">{letter.summary}</p>
                <p className="mt-2 text-base text-gray-200">{letter.from}</p>
            </div>
        </li>
    )
}

export default letterItem