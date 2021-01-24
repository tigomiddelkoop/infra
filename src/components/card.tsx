export default function Card({children}) {
    return (
        <div className={"rounded-lg w-full bg-gray-50 border-gray-300 border shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"}>
            {children}
        </div>
    )

}