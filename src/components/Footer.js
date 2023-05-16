import React from 'react'

function Footer() {
    return (
        <>
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a href='/' class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src='logo192.png' className='rounded-full w-24'/> 
                        <span class="ml-3 text-xl">Code Crafters</span>
                    </a>
                    <p class="text-md text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Code Crafters —
                        <a href="https://polya2z.github.io" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@polyA2z</a>
                    </p>
                    <p class="text-md font-semibold text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Developed by 👾
                        <a href="https://zbytes2227.github.io/" class="text-purple-700 ml-1" rel="noopener noreferrer" target="_blank">@Zbytes</a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer