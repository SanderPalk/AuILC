import './StockLoop.css';

function StockLoop() {
    return (
        <div className="stock-loop">
            <div className="stock-loop-container animation">
                <div className="stock-loop-array">
                    <div className="list-item"><span className='stock-name'> LCB:</span> +2.47%<img className='arrow-up'/> </div>
                    <div className="list-item"><span className='stock-name'>LCGS:</span> +1.07%<img className='arrow-up'/></div>
                    <div className="list-item"><span className='stock-name'>LCTC:</span> -2.03%<img className='arrow-down'/></div>
                    <div className="list-item"><span className='stock-name'>GCD:</span>+29.39%<img className='arrow-up'/></div>
                    <div className="list-item"><span className='stock-name'>LCNC:</span> -6.77%<img className='arrow-down'/></div>
                    <div className="list-item"><span className='stock-name'>GMLC:</span> +13.92<img className='arrow-up'/></div>
                </div>
                <div className="stock-loop-array">
                    <div className="list-item"><span className='stock-name'> LCB:</span> +2.47%<img className='arrow-up'/> </div>
                    <div className="list-item"><span className='stock-name'>LCGS:</span> +1.07%<img className='arrow-up'/></div>
                    <div className="list-item"><span className='stock-name'>LCTC:</span> -2.03%<img className='arrow-down'/></div>
                    <div className="list-item"><span className='stock-name'>GCD:</span>+29.39%<img className='arrow-up'/></div>
                    <div className="list-item"><span className='stock-name'>LCNC:</span> -6.77%<img className='arrow-down'/></div>
                    <div className="list-item"><span className='stock-name'>GMLC:</span> +13.92<img className='arrow-up'/></div>
                </div>
            </div>
        </div>
    )
}

export default StockLoop;