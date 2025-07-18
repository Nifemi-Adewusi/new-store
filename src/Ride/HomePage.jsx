/* eslint-disable react/prop-types */
import blue from "./home-images/blue.png";
import green from "./home-images/green.png";
import car from './home-images/car.png';
import driver from './home-images/driver.png';
import OptionComponent from "./OptionComponent";

function HomePage() {
    return (
      <div className="px-4 mt-20">
        <h1 className="font-semibold text-2xl ">
          What would you Like To Do Today?
        </h1>
        <p className="text-sm mb-12">Choose an option to continue</p>
        <div className="md:flex md:gap-4 md:justify-between">
                <OptionComponent
                     to="hire"
            img={car}
            specialClass={"greenBg"}
            header="Hire A Driver"
            text={"For a full day or hours Select driver and duration!"}
            color="#00B907"
            arrowIcon={green}
          />
          <OptionComponent
            img={driver}
            specialClass={"blueBg"}
            arrowIcon={blue}
            header={"Book a ride"}
            text={"For quick trip. Set up and go!"}
            color="#649EFF"
          />
        </div>
      </div>
    );
}

export default HomePage;


