import Searcher from '../../global/searcher/Searcher';
import '../../../sass/styles.sass';
import ClientPageLoaders from './loaders/ClientPageLoaders';
import HeaderListeners from '../../global/header/HeaderListeners';

(async () => await ClientPageLoaders.atPageStart())();

const headerListeners = new HeaderListeners('clients');
headerListeners.run();

const searcher = new Searcher('clients');
searcher.run();
