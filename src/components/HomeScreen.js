import './Homescreen.css';

function HomeScreen() {
    return (
        <div>
            <h1>Welcome to Aurum Investments LC</h1>
            <br/>
            <h2>a premier investment group dedicated to help you achieve your
                financial goals.</h2>

            <br/>
            <p>
                At Aurum Investments LC, we believe that successful investing is about more than just making
                money.
                It's about building a secure financial future, creating a legacy for your loved ones, and living
                life on your terms. That's why we offer a range of investment strategies designed to help you
                meet
                your unique needs and objectives.
            </p>
            <br/>
            <p>
                Our team of experienced investment professionals is committed to delivering superior returns
                while
                managing risk. We combine rigorous analysis, disciplined investment processes, and a deep
                understanding of the markets to help you achieve your financial goals.
            </p>
            <br/>
            <h3>Team members</h3>
            <div className="team">
                <div className="team-member">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                    <p className="team-description">
                        Michael Wright<br/>Phone: 55555555<br/><a href="#">Facebrowser</a>
                    </p>
                </div>
                <div className="team-member">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                    <p className="team-description">
                        Andrei Sadovsky<br/>Phone: 55555555<br/><a href="#">Facebrowser</a>
                    </p>
                </div>
            </div>
            <p>
                Whether you're a seasoned investor or just getting started, our personalized approach ensures
                that
                we understand your needs, goals, and risk tolerance. We then tailor our investment strategies to
                meet those needs, helping you achieve your objectives while staying within your comfort zone.
                <br/>
                At Aurum Investments LC, we offer a range of investment strategies, including equities, fixed
                income, alternative investments, and more. We also provide comprehensive wealth management
                services,
                including financial planning, tax planning, and estate planning.
                <br/>
            </p>
            <table className="pricing-table">
                <thead>
                <tr className="pricing-table-head">
                    <th>Service</th>
                    <th>Timeframe</th>
                    <th>Estimated growth</th>
                    <th>Pricing</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Bond</td>
                    <td>2-4 weeks</td>
                    <td>~ 5 - 10%</td>
                    <td>2%-5% from revenue</td>
                </tr>
                <tr>
                    <td>Holding account</td>
                    <td>Minimum 4 weeks</td>
                    <td>3.5% fixed</td>
                    <td>3% from revenue</td>
                </tr>
                <tr>
                    <td>Stocks and shares</td>
                    <td>Minimum 1 week</td>
                    <td>~ 10 - 15%</td>
                    <td>5%-10% from revenue</td>
                </tr>
                <tr>
                    <td>Crypto</td>
                    <td>Contract specific</td>
                    <td>Contract specific</td>
                    <td>Contract specific</td>
                </tr>
                <tr>
                    <td>Wealth management</td>
                    <td>Contract specific</td>
                    <td>Contract specific</td>
                    <td>Contract specific</td>
                </tr>
                </tbody>
            </table>
            <p>
                We also provide specialized and personalized contracts and services<br/>
            </p>
            <p>
                Contact us today to learn more about how we can help you achieve your financial goals. Our team of
                investment professionals is ready to assist you with any questions you may have. Let Aurum
                Investments LC be your partner in building a brighter financial future.
            </p>
            <p className="contact-list">
                <h3>Contact us by</h3>
                <a href="#">Facebrowser</a><br/>
                Michael's phone: 5555555<br/>
                Andrei's phone: 5555555

            </p>
        </div>
    )
}

export default HomeScreen;