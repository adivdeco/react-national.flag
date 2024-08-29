import Countery from "./Countery";


export default function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <h2 className="titel">
            Whear in the world?
          </h2>
          <p className="day">
            <b> Dark mode</b>
          </p>
        </div>
      </header>
      <div className="main">
        <div className="container1">
          <div className="search-box">
            <input type="text" placeholder="Enter Countery name.." />
          </div>
          <div className="listbox">
            <select name="" id="">

              <option value="india">India</option>
              <option value="japna">Japan</option>
              <option value="usa">UsA</option>
              <option value="tokyo">Tokyo</option>
              <option value="shebuya">Shebuyaa</option>

            </select>
          </div>
        </div>
        <Countery />
      </div>

    </>
  )
}
