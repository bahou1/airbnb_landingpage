import React from 'react';
import Cabin from '../assets/cabin.png';
import City from '../assets/city.png';
import Container from '../assets/container.png';
import Lux from '../assets/lux.png';
import New from '../assets/new.png';
import Rock from '../assets/rock.png';
import Trending from '../assets/trending.png';
import View from '../assets/view.png';
import Boat from '../assets/boat.png';
import Castle from '../assets/castle.png';
import Earthhouse from '../assets/earthouse.png';
import Cave from '../assets/cave.png';
import Next from '../assets/next.png';
import Filters from '../assets/filter.png';
{/*import Lake from '../assets/lake.png'
import National from '../assets/national.png'
import Tiny from '../assets/tiny.png'
import Ship from '../assets/ship.png'*/}
import { Button, Space, Switch } from 'antd';

const SlideMenu = () => {
    const App = () => {
        const [disabled, setDisabled] = useState(true);
        const toggle = () => {
            setDisabled(!disabled);
        };
    }

    return (
        <div className="SlideMenu flex justify-between items-center container mx-auto pt-5">
            {/* Cave Icon */}
            <div className="border-b-2 border-stone-900 justify-between icon-container flex flex-col items-center p-2">
                <img src={Cave} className="Cave-icon h-6 w-6" alt="Cave Icon" />
                <span className="text-xs mt-1">Cave</span>
            </div>

            {/* Cabin Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Cabin} className="Cabin-icon h-6 w-6" alt="Cabin Icon" />
                <span className="text-xs mt-1">Cabin</span>
            </div>

            {/* City Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={City} className="City-icon h-6 w-6" alt="City Icon" />
                <span className="text-xs mt-1">City</span>
            </div>

            {/* Container Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Container} className="Container-icon h-6 w-6" alt="Container Icon" />
                <span className="text-xs mt-1">Container</span>
            </div>

            {/* Lux Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Lux} className="Lux-icon h-6 w-6" alt="Lux Icon" />
                <span className="text-xs mt-1">Lux</span>
            </div>

            {/* New Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={New} className="New-icon h-6 w-6" alt="New Icon" />
                <span className="text-xs mt-1">New</span>
            </div>

            {/* Rock Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Rock} className="Rock-icon h-6 w-6" alt="Rock Icon" />
                <span className="text-xs mt-1">Rock</span>
            </div>

            {/* Trending Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Trending} className="Trending-icon h-6 w-6" alt="Trending Icon" />
                <span className="text-xs mt-1">Trending</span>
            </div>

            {/* View Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={View} className="View-icon h-6 w-6" alt="View Icon" />
                <span className="text-xs mt-1">View</span>
            </div>

            {/* Boat Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Boat} className="Boat-icon h-6 w-6" alt="Boat Icon" />
                <span className="text-xs mt-1">Boat</span>
            </div>

            {/* Castle Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Castle} className="Castle-icon h-6 w-6" alt="Castle Icon" />
                <span className="text-xs mt-1">Castle</span>
            </div>

            {/* Earthhouse Icon */}
            <div className=" justify-between icon-container flex flex-col items-center p-2">
                <img src={Earthhouse} className="Earth-icon h-6 w-6" alt="Earthhouse Icon" />
                <span className="text-xs mt-1">Earthhouse</span>
            </div>

            {/* Next Icon */}
            <img src={Next} className="Next-icon h-5 w-5 ml-9" alt="Next Icon" />

            {/* Filter Icon */}
            <div className="filters flex items-center">
                <img src={Filters} className="h-4 w-4 Next-icon h-5 w-5" alt="Filter Icon" />
                <span className='ml-3'>
                    <button>Filters</button>
                </span>
            </div>
            {/* Toggle */}
            <div className="toggle-comp">

            </div>
        </div>
    );
};

export default SlideMenu;
