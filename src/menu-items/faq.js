// assets
import { IconHelp } from '@tabler/icons';

// constant
const icons = { IconHelp };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //


const faq = {
    id: 'faq',
    type: 'group',
    children: [
        {
            id: 'Faq',
            title: 'Faq',
            type: 'item',
            url: '/Faq/Faq',
            icon:icons.IconHelp,
            breadcrumbs: false,
            image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646290974/faq_bgokap.png'
        }
    ]
};

export default faq;
