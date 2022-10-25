import { PAGE_TYPES } from '../constants/types';
import MainPage from '../pages/main-page';
import SearchPage from '../pages/search-page';

export default abstract class PageFactory {
    static create = (type: PAGE_TYPES) => {
        switch (type) {
            case PAGE_TYPES.MAIN:
                return new MainPage();

            case PAGE_TYPES.SEARCH:
                return new SearchPage();

            default:
                return new MainPage();
        }
    }
}