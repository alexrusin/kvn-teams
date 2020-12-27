export default function PageLoading() {
    return (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
            <span className="opacity-75 mx-auto block relative w-0" style={{top: '30%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 text-blue-700 fill-current" viewBox="0 0 50 50"><path d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg>
            </span>
        </div>
    )
}