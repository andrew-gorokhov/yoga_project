import React from "react";

function Header(){
  return(
    <header className="flex flex-row justify-between bg-white py-4 items-center">
      <h1 className="mx-10"><a href="/">YOGA.MOSCOW</a></h1>
      <div className="flex flex-row items-center">
        <a href="/" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Главная</a>
        <a href="/" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Направления</a>
        <a href="/" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Расписание</a>
        <a href="/" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Онлайн</a>
        <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Войти/Регистрация
        </button>
      </div>
    </header>
  )
}

export default Header;