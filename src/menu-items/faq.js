// assets
import { IconHelp } from '@tabler/icons';

// constant
const icons = { IconHelp };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const faq = {
    id: 'faq',
    title:'faq',
    type: 'group',
    children: [
        {
            id: 'Faq',
            title: 'Faq',
            type: 'item',
            url: '/Faq/Faq',
            icon:icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default faq;
