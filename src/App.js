function App() {
    return <div className="wrapper">
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt=""></img>
                
            <div className="headerInfo">
                <h3> Супер кросівки</h3>
                <p> для стильних підлітків</p>
            </div>
            </div>
            
                <ul className="headerRight">
                <li>
                    <svg />
                    <span>4000 грн </span>
                </li>   
                <li>
                     <svg />
                </li>     
            </ul>
        </header>
        <div className="content">
            <h1> Все що є</h1>
            .....
        </div>
    </div>;
}

export default App;