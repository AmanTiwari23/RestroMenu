

import { useState } from "react";
import Layout from "../components/Layout";

import CheeseFries from "../assets/data/Snacks/Cheese Fries.jpg";
import CheeseJalapenoPeppers from "../assets/data/Snacks/Cheese Jalapeno Peppers.jpg";
import CheesePotatoPops from "../assets/data/Snacks/Cheese Potato Pops.jpg";
import CornCheeseNuggets from "../assets/data/Snacks/Corn Cheese Nuggets.jpg";
import CreamHerbSeasonedFries from "../assets/data/Snacks/Cream & Herb Seasoned Fries.jpg";
import FrenchFries from "../assets/data/Snacks/French Fries.jpg";
import HaraBharaKabab from "../assets/data/Snacks/HaraBharaKabab.jpg";
import PiriPiriFrenchFries from "../assets/data/Snacks/Piri Piri French Fries.jpg";
import PotatoWedges from "../assets/data/Snacks/Potato Wedges.jpg";
import SamosaPaneerSamosa from "../assets/data/Snacks/Samosa,Paneer Samosa.jpg";
import TandooriPaneerNuggets from "../assets/data/Snacks/Tandoori Paneer Nuggets.jpg";
import VegSpringRolls from "../assets/data/Snacks/Veg Spring Rolls.jpg";

import BlackCurrentShake from "../assets/data/Drinks/Black Current Shake.jpg";
import Fruitpanch from "../assets/data/Drinks/Fruit panch.jpg";
import LeechiShake from "../assets/data/Drinks/Leechi Shake.jpg";
import OrangeBlossom from "../assets/data/Drinks/Orange Blossom.jpg";
import SoftDrinks from "../assets/data/Drinks/Soft Drinks.jpg";
import StrawberryMilkShake from "../assets/data/Drinks/Strawberry Milk Shake.jpg";

import Bhelpuri from "../assets/data/Fast Food/Bhel Puri.jpg";
import CholeBhature from "../assets/data/Fast Food/Chole Bhature.jpg";
import Dabeli from "../assets/data/Fast Food/Dabeli.jpg";
import Dosa from "../assets/data/Fast Food/Dosa.jpg";
import Idli from "../assets/data/Fast Food/Idli.jpg";
import Manchuriyan from "../assets/data/Fast Food/Manchuriyan.jpg";
import Momos from "../assets/data/Fast Food/Momos.jpg";
import Pakoras from "../assets/data/Fast Food/Pakoras.jpg";
import PaniPuri from "../assets/data/Fast Food/Pani Puri.jpg";
import Pavbhaji from "../assets/data/Fast Food/Pav bhaji.jpg";
import VadaPav from "../assets/data/Fast Food/Vada Pav.jpg";

import CornPeasSandwich from "../assets/data/Sandwiches/Corn & Peas Sandwich.jpg";
import GrilledSandwich from "../assets/data/Sandwiches/Grilled Sandwich.jpg";
import PaneerGrilledSandwich from "../assets/data/Sandwiches/Paneer Grilled Sandwich.jpg";

import ChillyGarlic from "../assets/data/Noodals/Chilly Garlic Noodles.jpg";
import HakkaNoodles from "../assets/data/Noodals/Hakka Noodles.jpg";
import HongKongNoodles from "../assets/data/Noodals/Hong Kong Noodles.jpg";
import ManchurianNoodles from "../assets/data/Noodals/Manchurian Noodles.jpg";
import SchezwanNoodles from "../assets/data/Noodals/Schezwan Noodles.jpg";
import SingapureNoodles from "../assets/data/Noodals/Singapure Noodles.jpg";
import TripleNoodles from "../assets/data/Noodals/Triple Noodles.jpg";

import AchariPaneer from "../assets/data/Paneer Specail/Achari Paneer.jpg";
import ChilliPaneer from "../assets/data/Paneer Specail/Chilli Paneer.jpg";
import KadhaiPaneer from "../assets/data/Paneer Specail/Kadhai Paneer.jpg";
import MatarPaneer from "../assets/data/Paneer Specail/Matar Paneer.jpg";
import PalakPaneer from "../assets/data/Paneer Specail/Palak Paneer.jpg";
import PaneerButterMasala from "../assets/data/Paneer Specail/Paneer Butter Masala.jpg";
import ShahiPaneer from "../assets/data/Paneer Specail/Shahi Paneer.jpg";

import AlooBaigan from "../assets/data/Vegiies/Aloo Baigan.jpg"
import AlooGobi from "../assets/data/Vegiies/Aloo Gobi.jpg"
import AlooMethi from "../assets/data/Vegiies/Aloo Methi.jpg"
import BaiganMasala from "../assets/data/Vegiies/Baigan Masala.jpg"
import BhindiMasala from "../assets/data/Vegiies/Bhindi Masala.jpg"
import KajuBhendi from "../assets/data/Vegiies/Kaju Bhendi.jpg"
import MixedVegetableBhuna from "../assets/data/Vegiies/Mixed Vegetable Bhuna.jpg"
import MixedVegetableDry from "../assets/data/Vegiies/Mixed Vegetable Dry.jpg"
import MixedVegetableKofta from "../assets/data/Vegiies/Mixed Vegetable Kofta.jpg"
import MushroomMasala from "../assets/data/Vegiies/Mushroom Masala.jpg"
import NavratanVegKoorma from "../assets/data/Vegiies/Navratan Veg Koorma.jpg"
import Salad from "../assets/data/Vegiies/Salad.jpg"

import ChanaMasala from "../assets/data/Daal/Chaana Masala.jpg"
import Chanadal from "../assets/data/Daal/Chana dal.jpg"
import DalMakhani from "../assets/data/Daal/Dal Makhani.jpg"
import TadkaDal from "../assets/data/Daal/Tadka Dal.jpg"

import BasmatiRice from "../assets/data/Rice/Basmati Rice.jpg"
import ChanaPilau from "../assets/data/Rice/Chana Pilau.jpg"
import MatarPulao from "../assets/data/Rice/Matar Pulao.jpg"
import PullaoRice from "../assets/data/Rice/Pulao Rice.jpg"
import VegetableBiryani from "../assets/data/Rice/Vegetable Biryani.jpg"

import GarlicNaan from "../assets/data/Roti Naan/Garlic Naan.jpg"
import Paratha from "../assets/data/Roti Naan/Paratha.jpg"
import PitaBread from "../assets/data/Roti Naan/Pita Bread.jpg"
import PlainNaan from "../assets/data/Roti Naan/Plain Naan.jpg"
import Pulka from "../assets/data/Roti Naan/Pulka.jpg"
import Puri from "../assets/data/Roti Naan/Puri.jpg"
import RumaliRoti from "../assets/data/Roti Naan/Rumali Roti.jpg"
import TurkishBread from "../assets/data/Roti Naan/Turkish Bread.jpg"
import ZeeraNaan from "../assets/data/Roti Naan/Zeera Naan.jpg"

import ButterScotch from "../assets/data/Ice Creams/Butter Scotch.jpg"
import ChoclateIcecream from "../assets/data/Ice Creams/Choclate Ice cream.jpg"
import Strawberry from "../assets/data/Ice Creams/Strawberry Ice cream.jpg"
// import Vanilla from "../assets/data/Ice Creams/vanilla Ice cream.jpg"
import mango from "../assets/data/Ice Creams/mango Ice cream.jpg"

import CusterdCake from "../assets/data/Dessert/Custerd Cake.jpg"
import FruitPastry from "../assets/data/Dessert/Fruit Pastry.jpg"
import FruitSalad from "../assets/data/Dessert/Fruit Salad.jpg"
import FruitSkewers from "../assets/data/Dessert/Fruit Skewers.jpg"
import GajarHalwa from "../assets/data/Dessert/Gajar Halwa.jpg"
import GulabJamun from "../assets/data/Dessert/Gulab Jamun.jpg"
import Jalebi from "../assets/data/Dessert/Jalebi.jpg"
import Rashmalai from "../assets/data/Dessert/Rashmalai.jpg"

import BesanBurfi from "../assets/data/Sweets/Besan Burfi.jpg"
import BikanerBurfi from "../assets/data/Sweets/Bikaner Burfi.jpg"
import CharBadam from "../assets/data/Sweets/Char Badam.jpg"
import Chenamurgi from "../assets/data/Sweets/Chena murgi.jpg"
import ChocolateBurfi from "../assets/data/Sweets/Chocolate Burfi.jpg"
import ChocolateBadam from "../assets/data/Sweets/Chocolate Badam.jpg"
import ChocolateRoll from "../assets/data/Sweets/Chocolate Roll.jpg"
import CoconutBurfi from "../assets/data/Sweets/Coconut Burfi.jpg"
import Coconutladdu from "../assets/data/Sweets/Coconut laddu.jpg"
import DodaBurfi from "../assets/data/Sweets/Doda Burfi.jpg"
import KajuBarfi from "../assets/data/Sweets/Kaju Barfi.jpg"
import kalakand from "../assets/data/Sweets/kalakand.jpg"
import KhoyaPakija from "../assets/data/Sweets/Khoya Pakija.jpg"
import KhoyaRoll from "../assets/data/Sweets/Khoya Roll.jpg"
import LalPeda from "../assets/data/Sweets/Lal Peda.jpg"
import MathuraPeda from "../assets/data/Sweets/Mathura Peda.jpg"
import Milkcake from "../assets/data/Sweets/Milk cake.jpg"
import PaanPetha from "../assets/data/Sweets/Paan Petha.jpg"
import PistaBurfi from "../assets/data/Sweets/Pista Burfi.jpg"
import PlainBurfi from "../assets/data/Sweets/Plain Burfi.jpg"
import Rabadi from "../assets/data/Sweets/Rabadi.jpg"
import Safedpeda from "../assets/data/Sweets/Safed peda.jpg"




 const menuData = [
  {
    section: "Snacks",
    dishes: [
      { id: 1, name: "Cheese Fries", image: CheeseFries },
      { id: 2, name: "Cheese Jalapeno Peppers", image: CheeseJalapenoPeppers },
      { id: 3, name: "Cheese Potato Pops", image: CheesePotatoPops },
      { id: 4, name: "Corn Cheese Nuggets", image: CornCheeseNuggets },
      {
        id: 5,
        name: "Cream & Herb Seasoned Fries",
        image: CreamHerbSeasonedFries,
      },
      { id: 6, name: "French Fries", image: FrenchFries },
      { id: 7, name: "Hara Bhara Kabab", image: HaraBharaKabab },
      { id: 8, name: "Piri Piri French Fries", image: PiriPiriFrenchFries },
      { id: 9, name: "Potato Wedges", image: PotatoWedges },
      { id: 10, name: "Samosa Paneer Samosa", image: SamosaPaneerSamosa },
      { id: 11, name: "Tandoori Paneer Nuggets", image: TandooriPaneerNuggets },
      { id: 12, name: "Veg Spring Rolls", image: VegSpringRolls },
    ],
  },
  {
    section: "Drinks",
    dishes: [
      { id: 1, name: "Black Current Shake", image: BlackCurrentShake },
      { id: 2, name: "Fruit panch", image: Fruitpanch },
      { id: 3, name: "Leechi Shake", image: LeechiShake },
      { id: 4, name: "Orange Blossom", image: OrangeBlossom },
      { id: 5, name: "Soft Drinks", image: SoftDrinks },
      { id: 6, name: "Strawberry MilkShake", image: StrawberryMilkShake },
    ],
  },
  {
    section: "Fast Food",
    dishes: [
      { id: 1, name: "Bhel puri", image: Bhelpuri },
      { id: 2, name: "Chole Bhature", image: CholeBhature },
      { id: 3, name: "Dabeli", image: Dabeli },
      { id: 4, name: "Dosa", image: Dosa },
      { id: 5, name: "Idli", image: Idli },
      { id: 6, name: "Manchuriyan", image: Manchuriyan },
      { id: 7, name: "Momos", image: Momos },
      {
        id: 8,
        name: "Pakoras",

        image: Pakoras,
      },
      {
        id: 9,
        name: "Pani Puri",
        image: PaniPuri,
      },
      {
        id: 10,
        name: "Pavbhaji",
        image: Pavbhaji,
      },
      {
        id: 11,
        name: "Vada Pav",
        image: VadaPav,
      },
    ],
  }, {
    section: "Sandwiches",
    dishes: [
      { id: 1, name: "Corn Peas Sandwich", image: CornPeasSandwich },
      { id: 2, name: "Grilled Sandwich", image: GrilledSandwich },
      { id: 3, name: "Paneer Grilled Sandwich", image: PaneerGrilledSandwich },
      
    ],
  },
  {
    section: "Noodals",
    dishes: [
      { id: 1, name: "Chilly Garlic", image: ChillyGarlic },
      { id: 2, name: "Hakka Noodles", image: HakkaNoodles },
      { id: 3, name: "Hong Kong Noodles", image: HongKongNoodles },
      { id: 4, name: "Manchurian Noodles", image: ManchurianNoodles },
      { id: 5, name: "Schezwan Noodles", image: SchezwanNoodles },
      { id: 6, name: "Singapure Noodles", image:SingapureNoodles },
      { id: 7, name: "Triple Noodles", image:TripleNoodles },
    ],
  },{
    section: "Paneer Specail",
    dishes: [
      { id: 1, name: "Achari Paneer", image: AchariPaneer},
      { id: 2, name: "Chilli Paneer", image: ChilliPaneer },
      { id: 3, name: "Kadhai Paneer", image: KadhaiPaneer },
      { id: 4, name: "Matar Paneer", image: MatarPaneer },
      { id: 5, name: "PalakPaneer", image: PalakPaneer },
      {  id: 6, name: "Paneer Butter Masala", image:PaneerButterMasala },
      { id: 7, name: "Shahi Paneer", image:ShahiPaneer },
    ],
  },
  {
    section: "Vegiies",
    dishes: [
      { id: 1, name: "Aloo Baigan", image: AlooBaigan},
      { id: 2, name: "Aloo Gobi", image:AlooGobi },
      { id: 3, name: "Aloo Methi", image: AlooMethi },
      { id: 4, name: "Baigan Masala", image:BaiganMasala },
      { id: 5, name: "Bhindi Masala", image:BhindiMasala },
      { id: 6, name: "Kaju Bhendi", image:KajuBhendi },
      { id: 7, name: "Mixed Vegetable Bhuna", image:MixedVegetableBhuna },
      { id: 8, name: " Mixed Vegetable Dry", image: MixedVegetableDry },
      { id: 9, name: " Mixed Vegetable Kofta", image:MixedVegetableKofta },
      { id: 10, name: "Mixed Vegetable Bhuna", image:MixedVegetableBhuna },
      { id: 11, name: "Mushroom Masala", image:MushroomMasala },
      { id: 12, name: "Navratan Veg Koorma", image:NavratanVegKoorma },
      { id: 11, name: "Salad", image:Salad},
    ],
  },
  {
    section: "Daal",
    dishes: [
      { id: 1, name: "Chana Masala", image:ChanaMasala},
      { id: 2, name: "Chana dal", image:Chanadal },
      { id: 3, name: "Tadka Dal", image:TadkaDal},
      { id: 4, name: "Dal Makhani", image:DalMakhani },
    ],
  },
  {
    section: "Rice",
    dishes: [
      { id: 1, name: "Basmati Rice", image:BasmatiRice},
      { id: 2, name: "Chana Pilau", image:ChanaPilau },
      { id: 3, name: "Matar Pulao", image:MatarPulao},
      { id: 4, name: "PullaoRice", image:PullaoRice },
      { id: 5, name: "Vegetable Biryani", image:VegetableBiryani },
    ],
  },
  {
    section: "Roti Naan",
    dishes: [
      { id: 1, name: "Garlic Naan", image:GarlicNaan},
      { id: 2, name: "Paratha", image:Paratha },
      { id: 3, name: "Pita Bread", image:PitaBread},
      { id: 4, name: "Plain Naan", image:PlainNaan },
      { id: 5, name: "Pulka", image:Pulka },
      { id: 6, name: "Puri", image:Puri },
      { id: 7, name: "Rumali Roti", image:RumaliRoti },
      { id: 8, name: "Turkish Bread", image:TurkishBread },
      { id: 9, name: "Zeera Naan", image:ZeeraNaan },
    ],
  },
  {
    section: "Ice Creams",
    dishes: [
      { id: 1, name: "Butter Scotch", image:ButterScotch},
      { id: 2, name: "Choclate Icecream", image:ChoclateIcecream },
      { id: 3, name: "Mango ice cream", image:mango },
      { id: 4, name: "Strawberry", image:Strawberry },
      // { id: 5, name: "Vanila", image:Vanilla },
    ],
  },
  {
    section: "Dessert",
    dishes: [
      { id: 1, name: "Custerd Cake", image:CusterdCake},
      { id: 2, name: "Fruit Pastry", image:FruitPastry },
      { id: 3, name: "Fruit Salad", image:FruitSalad},
      { id: 4, name: "Fruit Skewers", image:FruitSkewers },
      { id: 5, name: "Gajar Halwa", image:GajarHalwa },
      { id: 6, name: "Gulab Jamun", image:GulabJamun },
      { id: 7, name: "Jalebi", image:Jalebi },
      { id: 8, name: "Rashmalai", image:Rashmalai }
    ],
  },
  {
    section: "Sweets",
    dishes: [
      { id: 1, name: "Besan Burfi", image:BesanBurfi},
      { id: 2, name: "Bikaner Burfi", image:BikanerBurfi },
      { id: 3, name: "Char Badam ", image:CharBadam },
      { id: 4, name: "Chena murgi", image:Chenamurgi },
      { id: 5, name: "Chocolate Burfi", image:ChocolateBurfi },
      { id: 6, name: "Chocolate Badam", image:ChocolateBadam },
      { id: 7, name: "Chocolate Roll", image:ChocolateRoll },
      { id: 9, name: "Coconut Burfi", image:CoconutBurfi },
      { id: 10, name: "Coconut laddu", image:Coconutladdu },
      { id: 11, name: "Doda Burfi", image:DodaBurfi },
      { id: 12, name: "Kaju Barfi", image:KajuBarfi },
      { id: 13, name: "kalakand", image:kalakand },
      { id: 14, name: "Khoya Pakija", image:KhoyaPakija },
      { id: 15, name: "Khoya Roll", image:KhoyaRoll },
      { id: 16, name: "Lal Peda", image:LalPeda },
      { id: 17, name: "Mathura Peda", image:MathuraPeda },
       { id: 18, name: "Milkcake", image:Milkcake},
        { id: 19, name: "Mathura Peda", image:MathuraPeda },
         { id: 20, name: "Paan Petha", image:PaanPetha },
          { id: 21, name: "Pista Burfi", image:PistaBurfi },
           { id: 22, name: "Plain Burfi", image:PlainBurfi },
            { id: 23, name: "Rabadi", image:Rabadi },
             { id: 24, name: "Safed peda", image:Safedpeda },
    ],
  },
];

export default function Menu() {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            🍽️ Yum Yum Food Menu
          </h1>

          {menuData.map((category) => (
            <div key={category.section} className="mb-6">
              <button
                onClick={() => toggleSection(category.section)}
                className="w-full text-left text-lg sm:text-xl font-semibold bg-gray-200 text-gray-800 p-3 rounded-lg flex justify-between hover:bg-gray-300 transition"
              >
                {category.section} {expandedSections[category.section] ? "▲" : "▼"}
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
                {(expandedSections[category.section]
                  ? category.dishes
                  : category.dishes.slice(0, 5)
                ).map((dish) => (
                  <div
                    key={dish.id}
                    className="cursor-pointer bg-white shadow-md rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(dish.image)}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="p-2">
                      <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                        {dish.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{dish.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {selectedImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative p-4">
                <button
                  className="absolute top-2 right-2 text-white text-3xl font-bold"
                  onClick={() => setSelectedImage(null)}
                >
                  ✖
                </button>
                <img
                  src={selectedImage}
                  alt="Full Screen Dish"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

