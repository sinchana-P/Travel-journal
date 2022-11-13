function Journal(props) {
    return (
        <div className="journal-container">
            <div className="img-container">
                <img src={props.imageUrl}/>
            </div>
            <div className="journal-details">
                <h2><i class="fa-sharp fa-solid fa-location-dot"></i>{props.location}  <span><a href={props.googleMapsUrl}>View on Google Maps</a></span></h2>
                <h1>{props.title}</h1>
                <h3>{props.startDate} -<span> {props.endDate}</span></h3>
                <p>{props.description}</p>

            </div>
        </div>
    )
}

function App () {

    const dataArray = [
            {
                id: 1,
                title: "Mount Fuji",
                location: "Japan",
                googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
                startDate: "12 Jan, 2021",
                endDate: "24 Jan, 2021",
                description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
                imageUrl: "images/img1.jpg"
            },
            {
                id: 2,
                title: "Sydney Opera House",
                location: "Australia",
                googleMapsUrl: "https://source.unsplash.com/JmuyB_LibRo",
                startDate: "12 Jan, 2021",
                endDate: "24 Jan, 2021",
                description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings" ,
                imageUrl: "images/img2.jpg"
            },
            {
                id: 3,
                title: "Geirangerfjord",
                location: "Norway",
                googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
                startDate: "12 Jan, 2021",
                endDate: "24 Jan, 2021",
                description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
                imageUrl: "images/img3.jpg"
            }
    ]
    
    const displayJournal = dataArray.map(each => {
        return <Journal 
                    id={each.id}
                    title={each.title}
                    location={each.location}
                    googleMapsUrl={each.googleMapsUrl}
                    startDate={each.startDate}
                    endDate={each.endDate}
                    description={each.description}
                    imageUrl={each.imageUrl}   
                    />
    })

    return (
        <div>
            <nav className="nav">
                <i class="fa-solid fa-earth-asia"></i>                
                <h2 className="nav-title">my travel journal</h2>
            </nav>
            {displayJournal}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))