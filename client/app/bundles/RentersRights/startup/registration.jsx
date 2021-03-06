import ReactOnRails from 'react-on-rails';
import Home from '../components/Home';
import Renters from '../components/Renters';
import Eviction from '../components/Eviction';
import FAQ from '../components/FAQ';
import RentCalculator from '../components/RentCalculator';
import Shelter from '../components/Shelter';
import LegalAid from '../components/LegalAid';
import Resources from '../components/Resources';

//import { addLocaleData } from 'react-intl';
//import esLocaleData from 'react-intl/locale-data/es';

//addLocaleData(esLocaleData);

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Home,
  FAQ,
  Eviction,
  Renters,
  Shelter,
  LegalAid,
  RentCalculator,
  Resources
});
