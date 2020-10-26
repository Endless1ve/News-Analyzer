import './pages/analytics.css';
import DataStorage from './js/modules/DataStorage.js';
import Statistics from './js/components/Statistics.js';
export const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage.getNewsItems());
